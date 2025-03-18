import { CreandoYogaText } from '@/components/CreandoYogaText'
import { VerticalTextAboutMe } from '@/components/about-me/VerticalTextAboutMe'
import { MainTextAboutMe } from '@/components/about-me/MainTextAboutMe'

export const ContentAboutMe = () => {
  return (
    <div className='relative w-[min(100%,900px)] max-lg:mx-auto'>
      <VerticalTextAboutMe
        text='Comienza la aventura'
        classNames='-top-4 '
        year={2014}
      />
      <MainTextAboutMe />
      <VerticalTextAboutMe
        text='Únete a mi viaje'
        classNames='bottom-0'
        year={new Date().getFullYear()}
      />
      <div className=' absolute bottom-0 right-4 z-20 hidden  sm:block md:-bottom-12 md:right-12'>
        <CreandoYogaText />
      </div>
    </div>
  )
}
