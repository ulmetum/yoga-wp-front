'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { variants } from '@/components/home/content/animations'

import { PoseWomanOne } from '@/components/icons/PoseWomanOne.icon'

export const PassionYoga = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 1.25, ease: 'easeOut' }}
      className='passion-yoga relative gap-8 space-y-8 opacity-0 lg:flex lg:flex-row lg:justify-between lg:gap-4 lg:space-y-0'
    >
      <div className='lg:w-[50%]'>
        <h4 className='mb-4 tracking-[.12em] text-primary max-lg:text-center sm:text-3xl lg:tracking-wider'>
          ¿Qué puedo hacer por tí?
        </h4>
        <h2 className='text-[10vw] font-light leading-none max-lg:text-center md:text-[8vw] lg:text-5xl xl:text-6xl'>
          Mi pasión por el Yoga
        </h2>
        <p className='text-md mt-6 leading-[1.5] max-lg:text-center'>
          Estos años de dedicación, de trabajo y estudio de diversas prácticas
          de yoga se han convertido en un hermoso viaje de conocimientos y
          crecimiento continuo que ahora me gustaría compartir.
        </p>
      </div>
      <div className='relative flex h-[300px] max-w-[600px] items-end justify-start overflow-hidden rounded-3xl border border-dark max-lg:mx-auto lg:w-[50%]'>
        <div className='absolute -right-6 top-4 md:block'>
          <PoseWomanOne classNames='fill-primary' />
        </div>
        <h3 className='relative w-2/3 p-4 md:p-8 md:text-4xl'>
          Conecta profundamente con tu esencia
        </h3>
      </div>
    </motion.div>
  )
}
