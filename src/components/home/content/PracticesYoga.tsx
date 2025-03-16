'use client'

import { useRef } from 'react'

import { motion, useInView } from 'motion/react'

import { PoseWomanTwo } from '@/components/icons/PoseWomanTwo.icon'
import { variants } from '@/components/home/content/animations'

export const PracticesYoga = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 1.25, ease: 'easeOut' }}
      className='relative gap-8 space-y-8 opacity-0 lg:flex lg:flex-row lg:justify-between lg:gap-4 lg:space-y-0'
    >
      <div className='lg:order-1 lg:w-[50%]'>
        <h4 className='mb-4 text-right tracking-[.12em] text-primary max-lg:text-center sm:text-3xl lg:tracking-wider'>
          ¿Por qué practicar conmigo?
        </h4>
        <h2 className='text-right text-[10vw] font-light leading-none max-lg:text-center md:text-[8vw] lg:text-5xl xl:text-6xl'>
          Mi compromiso con tu bienestar
        </h2>
        <p className='text-md mt-6 text-right leading-[1.5] max-lg:text-center'>
          Porque mereces un espacio seguro en el que te sientas validada y
          segura. A través del yoga te ayudaré a soltar todas tus creencias
          limitantes y a crear un espacio seguro en ti misma, con independencia
          de tus circunstancias actuales.
        </p>
      </div>
      <div className='relative flex h-[300px] max-w-[600px] items-end justify-end overflow-hidden rounded-3xl border border-text [grid-area:text] max-lg:mx-auto lg:w-[50%]'>
        <div className='absolute -left-0 top-4 md:block'>
          <PoseWomanTwo classNames='fill-primary' />
        </div>

        <h3 className='relative w-full p-4 text-right sm:w-2/3 sm:p-4 md:p-8 md:text-4xl'>
          Un espacio de transformación para ti
        </h3>
      </div>
    </motion.div>
  )
}
