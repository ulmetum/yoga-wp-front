import { Container } from '@/components/Container'
import { MainHeading } from '@/components/home/hero/MainHeading'
import { AnimationText } from '@/components/text-animation-isla/AnimationText'
import { CircularText } from '@/components/home/hero/CircularText'
import { CarouselYoga } from '@/components/home/hero/CarouselYoga'
import { Marquee } from '@/components/home/hero/Marquee'

export const HeroHome = () => {
  return (
    <Container classNames='flex min-h-screen items-center justify-center px-2 py-[calc(var(--main-header-height)+2rem)] sm:px-6'>
      <div className='relative flex h-full w-full flex-col items-center justify-center gap-6 pt-[calc(var(--header-height))] lg:gap-0 xl:pt-0'>
        <MainHeading />
        <div className='relative mx-auto flex max-w-[900px] flex-col items-center gap-4 lg:flex-row-reverse xl:gap-0'>
          <AnimationText />
          <div className='circular-text hidden h-auto w-[300px] items-center lg:flex'>
            <CircularText />
          </div>
          <div className='flex items-center md:w-[65%]'>
            <p className='mx-auto w-[min(100%,480px)] text-center text-[.95rem] leading-snug md:text-right md:text-sm lg:text-base'>
              Te doy la bienvenida a La Isla del Yoga, un proyecto que, tras
              varios años de gestación, nace para ofrecerte un nuevo enfoque de
              tu práctica de Yoga, poniendo a tu disposición un contenido
              profundo y transformador que permita integrar en tu vida y en tu
              mundo interior cualidades como la paz, la calma, la armonía o el
              bienestar.
            </p>
          </div>
        </div>
        <CarouselYoga />
        <div className='mt-auto max-xl:hidden'>
          <Marquee />
        </div>
      </div>
    </Container>
  )
}
