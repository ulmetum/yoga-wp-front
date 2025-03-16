'use client'

import { motion, useInView } from 'motion/react'
import type { Service } from '@/components/services/OurServices'
import { Calendar } from '@/components/icons/Calendar.icon'
import Image from 'next/image'
import { useRef } from 'react'

interface Props {
  service: Service
}

const variants = {
  notInView: {
    opacity: 0,
    scale: 0.75,
  },
  inView: {
    opacity: 1,
    scale: 1,
  },
}

export const ServiceItem = ({ service }: Props) => {
  const ref = useRef<HTMLLIElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.li
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 0.35, ease: [0.7, -0.4, 0.3, 1.4] }}
      style={{
        backgroundColor: service.color,
      }}
      className='card mx-auto max-w-2xl'
    >
      <div className='inner-card flex h-full flex-col justify-center p-8 transition-all duration-300 ease-out'>
        <div className='image mx-auto h-[250px] w-[250px]'>
          <Image
            width={248}
            height={248}
            className='h-full w-full transition-all duration-[850ms] ease-out'
            src={service.image}
            alt={service.altImage}
          />
        </div>
        <div className='mt-8 flex flex-col justify-between'>
          <div>
            <p className='flex items-center text-sm text-gray-600'>
              <Calendar
                classNames='stroke-zinc-900/55 mr-1'
                size='sm'
              />
              <span className='text-zinc-900/stroke-zinc-900/55 text-base capitalize'>
                {service.type}
              </span>
            </p>
            <h3 className='mb-2 mt-0 font-normal'>{service.name}</h3>
            <p className='text-base text-gray-700'>{service.description}</p>
          </div>
        </div>
      </div>
    </motion.li>
  )
}
