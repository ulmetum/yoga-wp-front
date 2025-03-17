'use client'

import { motion, useInView } from 'motion/react'

import { CreandoYogaText } from '@/components/CreandoYogaText'
import { PoseWomanNine } from '@/components/icons/PoseWomanNine.icon'
import { useRef } from 'react'
import { variants } from '@/components/home/content/animations'

export const CreandoYoga = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 1.25, ease: 'easeOut' }}
      className='opacity-0'
    >
      <div className='relative space-y-8 lg:flex lg:flex-row lg:justify-between lg:gap-4 lg:space-y-0'>
        <div className='lg:w-[50%]'>
          <h4 className='mb-4 tracking-[.12em] text-primary max-lg:text-center sm:text-3xl lg:tracking-wider'>
            Creando Yoga
          </h4>
          <h2 className='text-[10vw] font-light leading-none max-lg:text-center md:text-[8vw] lg:text-5xl xl:text-6xl'>
            La escuela online
          </h2>
          <p className='text-md mt-6 leading-[1.5] max-lg:text-center'>
            Practica con la libertad de horarios que tus compromisos personales
            te permitan con una amplia variedad de cursos (tanto gratuitos como
            premium). Tendrás acceso gratis a lecciones de cursos premium para
            que compruebes la calidad de los mismos antes de adquirirlos, sin
            gasto alguno. Todo esto lo encontrarás en nuestra escuela online que
            puedes visitar haciendo clic en la dirección que te muestro aquí
            abajo.
          </p>
          <div className='mt-6 flex justify-center lg:hidden'>
            <div className='relative w-[max-content]'>
              <CreandoYogaText />
            </div>
          </div>
        </div>
        <div className='relative flex h-[300px] max-w-[600px] items-end justify-start overflow-hidden rounded-3xl border border-dark max-lg:mx-auto lg:w-[50%]'>
          <div className='absolute -right-6 -top-24 scale-[65%] md:block'>
            <PoseWomanNine classNames='fill-primary' />
          </div>

          <h3 className='relative w-2/3 p-4 md:p-8 md:text-4xl'>
            Despierta tu mente y tu cuerpo
          </h3>
        </div>
      </div>
      <div className='mt-12'>
        <div className='mt-6 hidden justify-center lg:flex'>
          <div className='motion-preset-pulse-sm relative w-[max-content] motion-duration-1000 motion-ease-spring-bounciest'>
            <CreandoYogaText />
          </div>
        </div>
        <p className='text-md mt-6 text-center leading-[1.5] max-lg:text-center text-primary md:text-2xl font-normal'>
          Pásate e inscríbete de forma gratuita y sin compromiso de ningún tipo.
          ¡No te lo pierdas!
        </p>
      </div>
    </motion.div>
  )
}
