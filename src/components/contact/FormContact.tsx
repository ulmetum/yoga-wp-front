'use client'

import { sendEmailContactAction } from '@/actions/contact/send-email.contact.action'
import { cn } from '@/utils/mergeClass'
import {
  formContact,
  formContactSchema,
} from '@/validations/form-contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { getCookie } from 'cookies-next'
import { useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { ModalContact } from '@/components/contact/ModalContact'
// import { AnimatedTitle } from '@/components/AnimatedTitle'

const durationSuccessModal = 5000
const durationErrorModal = 5000
export type TypeModal = 'success' | 'error' | null

export const FormContact = () => {
  const email = (getCookie('email') as string) ?? ''
  const rememberMe = !!email
  const [modal, setModal] = useState<TypeModal>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  })

  const handleOpenModal = (type: TypeModal) => {
    setModal(type)
    document.documentElement.style.overflow = 'hidden' // Bloquea scroll
  }

  const handleCloseModal = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setModal(null)
    document.documentElement.style.overflow = '' // Restaura scroll
  }

  const handleForm: SubmitHandler<formContact> = async (data) => {
    if (data.contact_number) return

    const { success } = await sendEmailContactAction(data)

    if (!success) {
      handleOpenModal('error')
      timeoutRef.current = setTimeout(handleCloseModal, durationErrorModal)
      reset()
      return
    }

    handleOpenModal('success')
    timeoutRef.current = setTimeout(handleCloseModal, durationErrorModal)

    reset()
  }

  return (
    <>
      <AnimatePresence initial={false}>
        {modal === 'error' && (
          <ModalContact
            title='Hubo un error al enviar el correo'
            content='Por favor, inténtalo de nuevo más tarde.'
            modal={modal}
            containerClassNames='bg-primary p-8 rounded-lg'
            titleClassNames='mb-4'
            colorButton='light'
            buttonCloseClassNames='hover:stroke-light'
            duration={durationErrorModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {modal === 'success' && (
          <ModalContact
            title='¡Gracias por ponerte en contacto conmigo!'
            content='Intentaré responderte lo antes posible.'
            containerClassNames='bg-white p-8 rounded-lg h-[40dvh] border border-dark/30'
            titleClassNames='text-primary mb-4'
            contentClassNames='text-dark'
            modal={modal}
            colorButton='dark'
            duration={durationSuccessModal}
            handleCloseModal={handleCloseModal}
            barClassNames='bg-primary'
          />
        )}
      </AnimatePresence>
      <form
        onSubmit={handleSubmit(handleForm)}
        id='contact-form'
        className='mx-auto h-3/4 p-6 xl:mt-0 round w-[min(100%,672px)]'
      >
        <input
          type='text'
          autoComplete='off'
          {...register('contact_number')}
          className='absolute -left-[9999px] opacity-0'
        />
        <div className='grid h-full gap-6 sm:grid-cols-2'>
          <div className='relative z-0'>
            <input
              type='text'
              {...register('name')}
              className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0'
              placeholder=' '
            />
            <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary'>
              Tu nombre
            </label>
            {errors.name?.message && (
              <span
                id='name-error'
                className='mt-2 inline-block rounded-md text-[.85rem] font-normal text-primary  '
              >
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className='relative z-0'>
            <input
              type='text'
              defaultValue={email}
              {...register('email')}
              className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0'
              placeholder=' '
            />
            <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary'>
              Correo electrónico
            </label>
            {errors.email?.message && (
              <span
                id='email-error'
                className='mt-2 inline-block rounded-md text-[.85rem] font-normal text-primary  '
              >
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className='relative z-0 col-span-2'>
            <textarea
              {...register('message')}
              rows={5}
              className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0'
              placeholder=' '
            ></textarea>
            <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary'>
              Tu mensaje
            </label>
            {errors.message?.message && (
              <span
                id='message-error'
                className='mt-2 inline-block rounded-md text-[.85rem] font-normal text-primary  '
              >
                {' '}
                {errors.message?.message}
              </span>
            )}
          </div>
          <div className='col-span-2 flex flex-col items-center justify-center gap-2'>
            <div className='relative z-0 col-span-2 flex items-center'>
              <input
                id='remember_me'
                {...register('remember_me', { value: rememberMe })}
                type='checkbox'
                className='transition-all duration-200 ease-out'
              />
              <label
                htmlFor='remember_me'
                className='transition-color ml-2 block text-sm text-gray-800 duration-300'
              >
                Recuérdame
              </label>
            </div>
            <button
              id='btn-submit'
              type='submit'
              className={cn('btn-submit mt-5 w-[300px] rounded-md px-10 py-2', {
                'pointer-events-none': isSubmitting,
              })}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            <div className='flex flex-col items-center pt-4'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  className='peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-primary checked:bg-primary hover:shadow-md'
                  id='terms'
                  {...register('terms')}
                />
                <label
                  className='ml-2 cursor-pointer text-sm text-slate-600'
                  htmlFor='terms'
                >
                  <p className='text-dark text-base font-medium'>
                    Estoy de acuerdo con los
                    <a
                      href='#'
                      className='ml-1 text-amber-700 transition hover:text-amber-800 hover:underline dark:text-amber-800'
                    >
                      términos y condiciones
                    </a>
                    .
                  </p>
                </label>
              </div>
              {errors.terms?.message && (
                <span
                  id='terms-error'
                  className='mt-2 inline-block rounded-md text-[.85rem] font-normal text-primary  '
                >
                  {errors.terms?.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
