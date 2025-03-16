'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper as SwiperCore } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import './carousel.css'

export const CarouselYoga = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [totalSlides, setTotalSlides] = useState(3)

  const currentRef = useRef<HTMLSpanElement | null>(null)
  const totalRef = useRef<HTMLSpanElement | null>(null)

  const progressBarRef = useRef<SVGRectElement | null>(null)
  const autoplayTimeLeft = (s: SwiperCore, time: number, progress: number) => {
    const roundedProgress = Math.round((1 - progress) * 100) // Redondea el progreso al valor más cercano.

    if (!progressBarRef.current) return
    progressBarRef.current.setAttribute('width', `${roundedProgress}`)
  }
  return (
    <div className='relative xl:absolute xl:top-0 xl:right-[20%] xl:max-w-[400px] '>
      <Swiper
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className='w-[min(80%,400px)] h-[200px] xl:h-[170px]'
        loop
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 4000,
        }}
        onAutoplayTimeLeft={autoplayTimeLeft}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
        onInit={(swiper) => {
          setTotalSlides(swiper.slides.length)
        }}
      >
        <SwiperSlide>
          <Image
            src='/images/yoga-01.webp'
            alt='yoga'
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/yoga-02.webp'
            alt='yoga'
            width={400}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/yoga-03.webp'
            alt='yoga'
            width={400}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
      <div className='mt-2 flex items-center gap-2 justify-center'>
        <span
          className='font-headings text-dark xl:text-sm'
          ref={currentRef}
        >
          {currentSlide}
        </span>
        <div className='autoplay-progress'>
          <svg
            width='100'
            height='2'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='100'
              height='2'
              className='progress-background'
              fill='lightgray'
            ></rect>
            <rect
              ref={progressBarRef}
              height='2'
              className='progress-bar'
              fill='var(--primary)'
              width='0'
            ></rect>
          </svg>
        </div>
        <span
          ref={totalRef}
          className='font-headings text-dark xl:text-sm'
        >
          {totalSlides}
        </span>
      </div>
    </div>
  )
}
