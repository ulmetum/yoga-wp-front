import { ContentHome } from '@/components/home/content/ContentHome'
import { HeroHome } from '@/components/home/hero/HeroHome'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio | La Isla del Yoga - Yoga para el Cuerpo y la Mente',
  description:
    'Descubre el yoga en La Isla del Yoga. Aprende posturas, técnicas de respiración y cómo el yoga puede mejorar tu bienestar físico y mental.',
  keywords:
    'yoga, bienestar, meditación, salud, posturas de yoga, respiración, La Isla del Yoga, mindfulness',
  openGraph: {
    title: 'Inicio | La Isla del Yoga - Yoga para el Cuerpo y la Mente',
    description:
      'Descubre el yoga en La Isla del Yoga. Aprende posturas, técnicas de respiración y cómo el yoga puede mejorar tu bienestar físico y mental.',
    url: 'https://www.laisladelyoga.com', // Cambia por la URL real de tu sitio
    siteName: 'La Isla del Yoga',
    images: [
      {
        url: '/images/laisladelyoga-home.webp', // Cambia por la URL de tu imagen destacada
        width: 1200,
        height: 630,
        alt: 'Yoga para el cuerpo y la mente en La Isla del Yoga',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inicio | La Isla del Yoga - Yoga para el Cuerpo y la Mente',
    description:
      'Descubre el yoga en La Isla del Yoga. Aprende posturas, técnicas de respiración y cómo el yoga puede mejorar tu bienestar físico y mental.',
    images: ['/images/laisladelyoga-home.webp'], // Cambia por la URL de tu imagen destacada
  },
}

export default async function Home() {
  return (
    <div className='home'>
      <section className='hero-home light sticky left-0 top-0 min-h-[100dvh] w-full'>
        <HeroHome />
      </section>
      <section className='relative grid min-h-[100dvh] w-full place-items-center overflow-hidden bg-white px-2 py-24 shadow-y-section sm:px-6'>
        <ContentHome />
      </section>
    </div>
  )
}
