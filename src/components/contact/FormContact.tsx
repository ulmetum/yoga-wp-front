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
import { AnimatePresence, motion } from 'motion/react'
import { Close } from '@/components/icons/Close.icon'

const durationAnimationModal = 12000

export const FormContact = () => {
  const email = (getCookie('email') as string) ?? ''
  const rememberMe = !!email
  const [showModal, setShowModal] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  })

  const handleForm: SubmitHandler<formContact> = async (data) => {
    if (data.contact_number) return

    await sendEmailContactAction(data)

    setShowModal(true)
    // document.documentElement.style.overflow = 'hidden'

    timeoutRef.current = setTimeout(() => {
      setShowModal(false)
    }, durationAnimationModal)

    reset()
  }

  const handleCloseModal = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      setShowModal(false)
      // document.documentElement.style.overflow = 'auto'
    }
  }

  return (
    <div>
      <AnimatePresence initial={false}>
        {showModal && (
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 1,
              type: 'spring',
              bounce: 0.55,
              exit: { duration: 0.15 },
            }}
            className={cn(
              'z-30 w-full fixed inset-0 flex items-center justify-center',
              {
                'backdrop-blur-sm': showModal,
              }
            )}
          >
            <div className='relative h-[40dvh] border border-dark/30 py-6 rounded-lg px-8 flex justify-center flex-col w-[min(100%,700px)] mx-auto bg-white'>
              <div
                onClick={handleCloseModal}
                className='absolute top-2 right-2 cursor-pointer'
              >
                <Close size='xs' />
              </div>
              <h2 className='text-primary mb-4 text-3xl my-0 sm:text-4xl text-center'>
                ¡Gracias por ponerte en contacto conmigo!
              </h2>
              <p className='text-dark text-lg md:text-xl text-center'>
                Intentaré responderte lo antes posible.
              </p>
              <motion.div
                animate={{ width: showModal ? '100%' : 0 }}
                transition={{
                  duration: durationAnimationModal / 1000,
                  ease: 'linear',
                }}
                className='absolute bottom-0 bg-primary h-[4px] w-0 left-0'
              ></motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <form
        onSubmit={handleSubmit(handleForm)}
        id='contact-form'
        className='mx-auto h-3/4 w-full p-6 xl:mt-0 round'
      >
        <h2 className='mb-8 text-center font-normal text-primary'>
          Respira, Relájate y Escríbeme
        </h2>
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
                'bg-dark/45 pointer-events-none': isSubmitting,
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
    </div>
  )
}
