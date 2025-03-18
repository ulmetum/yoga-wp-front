import { FormContact } from '@/components/contact/FormContact'
import { VerticalHeading } from '@/components/contact/VerticalHeading'
import { Container } from '@/components/Container'
import { PoseWomanEight } from '@/components/icons/PoseWomanEight.icon'

export default function ContactPage() {
  return (
    <section className='min-h-screen bg-white py-[calc(var(--main-header-height)+2rem)] shadow-y-section xl:pt-[calc(25dvh-var(--main-header-height))]'>
      <Container>
        <div className='max-xl:space-y-8 xl:flex xl:gap-4 xl:px-4'>
          <div className='relative !leading-[1.125] xl:w-1/2'>
            <VerticalHeading />
            <div className='absolute -bottom-6 left-1/2 z-10 w-full -translate-x-1/2 text-center sm:bottom-0'>
              <h3 className='font-normal'>
                Pero jamás pierdas el contacto contigo
              </h3>
              <p className='mt-3 text-[.95rem]'>
                Envíame un correo electrónico a{' '}
                <span
                  id='span-email'
                  className='inline-block scale-100 bg-white px-1 text-[.95rem] text-primary underline underline-offset-2 '
                >
                  hola@laisladelyoga.com
                </span>{' '}
                o a través del siguiente formulario
              </p>
            </div>
            <div className='mx-auto h-[600px] w-[min(100%,600px)] '>
              <PoseWomanEight />
            </div>
          </div>
          <div className='w-full max-w-2xl rounded-md max-xl:mx-auto xl:flex xl:w-1/2 xl:items-center xl:justify-center'>
            <FormContact />
          </div>
        </div>
      </Container>
    </section>
  )
}
