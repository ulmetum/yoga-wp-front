'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export const CreandoYogaText = () => {
  return (
    <Link
      href='https://creandoyoga.com'
      target='_blank'
      data-customtooltip='Haz clic para acceder a la escuela online!'
      id='creando-yoga'
      className='tooltip transition-all'
    >
      <motion.div
        animate={{ scale: [1, 1.065, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='top'>
          <span className='font-heading'>
            Haz clic para acceder a la escuela online!
          </span>
          <i></i>
        </div>
        <span className='text-creando-yoga inline-block text-5xl font-bold leading-normal'>
          Creando Yoga
        </span>
        <span className='mask text-creando-yoga absolute inset-0 inline-block text-5xl font-bold leading-normal'>
          Creando Yoga
        </span>
      </motion.div>
    </Link>
  )
}
