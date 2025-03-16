import { ContentAboutMe } from '@/components/about-me/ContentAboutMe'
import { HeroAboutMe } from '@/components/about-me/HeroAboutMe'
import { Container } from '@/components/Container'
import Image from 'next/image'

export default function AboutMePage() {
  return (
    <div>
      <section className='hero-about-me sticky left-0 top-0 min-h-[100dvh] w-full shadow-y-section motion-duration-1000 lg:flex'>
        <Container classNames='relative order-1 w-full py-2'>
          <HeroAboutMe />
        </Container>
      </section>
      <section className='relative grid min-h-[100dvh] place-items-center bg-white py-24 shadow-y-section'>
        <Container classNames='relative flex h-full items-center justify-center xl:justify-start'>
          <ContentAboutMe />
        </Container>
        <Image
          className='absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover grayscale-[50%] lg:left-[75%]'
          src='/images/miriam-about-me-bg.webp'
          alt='Perfil'
          width={1000}
          height={600}
        />
      </section>
    </div>
  )
}
