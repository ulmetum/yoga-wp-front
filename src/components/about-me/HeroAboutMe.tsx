// import Image from 'next/image'

import { CopyClipboard } from '@/components/footer/CopyClipboard'
import { BfgImgAboutMe } from '@/components/about-me/BgImgAboutMe'
import { MenuIcons } from '@/components/MenuIcons'
import { AnimatedTitle } from '@/components/AnimatedTitle'
import { TiltShineCard } from '../TiltShineCard'

export const HeroAboutMe = () => {
  return (
    <div className='w-full h-screen'>
      <BfgImgAboutMe />
      <div className='hero-about-me-inner absolute left-1/2 top-0 z-10 flex min-h-[100dvh] w-[min(100%,1280px)] -translate-x-1/2 flex-col justify-between px-2 py-4 pt-[calc(var(--main-header-height)+2rem)]'>
        <h4 className='text-[1.4rem] text-primary m-0'>Bienvenid@s</h4>
        <div className='w-[min(90%,1280px)] lg:mx-auto lg:flex lg:items-center lg:gap-8'>
          <div className='w-[min(90%,600px)] lg:w-2/3'>
            <AnimatedTitle
              classNamesTitle='xl:text-8xl pb-4'
              text='Míriam R. Vázquez'
            />
            <p className='leading-normal sm:text-[1.35rem] lg:text-2xl'>
              ¡Hola! Mi nombre es Míriam y soy profesora de yoga certificada.
              Estoy muy emocionada de poder compartir mi pasión y experiencia
              contigo a través de mi sitio web. Creo que una vida más bonita
              está al alcance de tod@s y que con las herramientas y la
              mentalidad adecuadas, puedes alcanzar tu máximo potencial y vivir
              una vida plena y significativa.
            </p>
          </div>
          <TiltShineCard
            classNamesContainer='max-md:hidden max-lg:absolute bottom-4 right-4 '
            classNamesInner='w-60 lg:w-80'
            src='/images/perfil.webp'
          />
        </div>
        <div className='mail-networks mx-6 mb-32 md:mb-16 lg:mx-2 lg:mb-32'>
          <div className='w-[max-content] origin-left rotate-90'>
            <h4 className='m-0 font-headings text-xl text-primary lg:hidden'>
              hola@laisladelyoga.com
            </h4>
            <h4 className='m-0 inline-block'>Sígueme en mis redes</h4>
          </div>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div>
            <MenuIcons classNames='gap-2 xl:gap-3' />
          </div>
          <div className='hidden font-headings text-xl text-primary lg:block'>
            <CopyClipboard color='amber' />
          </div>
        </div>
      </div>
    </div>
  )
}
