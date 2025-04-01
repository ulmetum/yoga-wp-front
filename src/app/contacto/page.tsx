import { AnimatedTitle } from '@/components/AnimatedTitle'
import { FormContact } from '@/components/contact/FormContact'
import { ImageContact } from '@/components/contact/ImageContact'
import { VerticalHeading } from '@/components/contact/VerticalHeading'
import { Container } from '@/components/Container'
import { MailIslaDelYoga } from '@/components/MailIslaDelYoga'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | La Isla del Yoga - Conecta con tu Instructora de Yoga',
  description:
    'Ponte en contacto con La Isla del Yoga para más información sobre clases, asesoramiento y cualquier consulta relacionada con yoga y bienestar.',
  openGraph: {
    title: 'Contacto | La Isla del Yoga - Conecta con tu Instructora de Yoga',
    description:
      'Ponte en contacto con La Isla del Yoga para más información sobre clases, asesoramiento y cualquier consulta relacionada con yoga y bienestar.',
    url: 'https://www.laisladelyoga.com/contacto',
    images: [
      {
        url: '/images/laisladelyoga-contact.webp', // Ruta de la imagen para Open Graph
        width: 1200,
        height: 630,
        alt: 'Contacto con La Isla del Yoga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Tipo de tarjeta para Twitter
    title: 'Contacto | La Isla del Yoga - Conecta con tu Instructora de Yoga',
    description:
      'Ponte en contacto con La Isla del Yoga para más información sobre clases, asesoramiento y cualquier consulta relacionada con yoga y bienestar.',
    images: [
      {
        url: '/images/laisladelyoga-contact.webp', // Ruta de la imagen para Twitter
        width: 1200,
        height: 630,
        alt: 'Contacto con La Isla del Yoga',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <section className='min-h-screen bg-white py-[calc(var(--main-header-height)+2rem)] shadow-y-section xl:pt-[calc(25dvh-var(--main-header-height))]'>
      <Container>
        <AnimatedTitle
          classNamesTitle='pb-2 xl:text-8xl'
          classNamesContainer='text-center   '
          text='Respira, Relájate y Escríbeme'
        />
        <div className='flex flex-col gap-8 xl:gap-4 xl:flex-row xl:px-4'>
          <div className='relative !leading-[1.125] xl:w-1/2'>
            <VerticalHeading />
            <div className='absolute -bottom-6 left-1/2 z-10 w-full -translate-x-1/2 text-center sm:bottom-0'>
              <h3 className='font-normal'>
                Pero jamás pierdas el contacto contigo
              </h3>
              <p className='mt-3 text-[.95rem]'>
                Envíame un correo electrónico a
                <MailIslaDelYoga /> o a través del siguiente formulario
              </p>
            </div>
            <div className='mx-auto h-[600px] w-[min(100%,425px)] '>
              <ImageContact />
            </div>
          </div>
          <div className='flex items-center justify-center xl:w-1/2 '>
            <FormContact />
          </div>
        </div>
      </Container>
    </section>
  )
}
