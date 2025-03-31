import Image from 'next/image'

import { CopyClipboard } from '@/components/footer/CopyClipboard'
import { BfgImgAboutMe } from '@/components/about-me/BgImgAboutMe'
import { MenuIcons } from '@/components/MenuIcons'
import { AnimatedTitle } from '@/components/AnimatedTitle'

export const HeroAboutMe = () => {
  return (
    <div>
      <BfgImgAboutMe />
      <div className='hero-about-me-inner absolute left-1/2 top-0 z-10 flex min-h-[100dvh] w-[min(100%,1280px)] -translate-x-1/2 flex-col justify-between px-2 py-4 pt-[calc(var(--main-header-height)+2rem)]'>
        <h4 className='text-[1.4rem] text-primary m-0'>Bienvenid@s</h4>
        <div className='w-[min(90%,1280px)] lg:mx-auto lg:flex lg:items-center lg:gap-8'>
          <div className='w-[min(90%,600px)] lg:w-2/3'>
            <AnimatedTitle
              classNamesTitle='lg:text-7xl'
              classNamesContainer='pb-4'
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
          <div className='image bottom-4 right-2 h-[300px] w-1/2 overflow-hidden rounded-md shadow-md max-lg:absolute max-[450px]:hidden md:w-[min(100%,350px)] lg:block lg:h-[450px] lg:w-1/3'>
            <Image
              className='relative h-full w-full -scale-x-100 rounded-md object-cover grayscale-[55%]'
              src='/images/perfil.webp'
              priority
              alt='Perfil'
              width={300}
              height={600}
            />
          </div>
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
