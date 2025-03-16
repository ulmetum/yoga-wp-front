'use client'

import { cn } from '@/utils/mergeClass'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { variants } from '@/components/home/content/animations'

const services = [
  {
    id: 1,
    title: 'Cursos y Talleres',
    description:
      'Aprende yoga de forma profunda con clases diseñadas para todos los niveles.',
    color: 'purple-pale',
  },
  {
    id: 2,
    title: 'Artículos y Libros',
    description:
      'Descubre guías y lecturas que te ayudarán en tu camino de bienestar.',
    color: 'turquoise',
  },
  {
    id: 3,
    title: 'Prácticas personalizadas',
    description:
      'Sesiones de yoga adaptadas a tus necesidades y objetivos personales.',
    color: 'primary',
  },
] as const

export const ServicesYoga = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 1.25, ease: 'easeOut' }}
      className='services-yoga gap-4 space-y-8 opacity-0 lg:flex lg:space-y-0'
    >
      {services.map(({ id, title, description, color }) => (
        <div
          key={id}
          className={cn(
            'relative mx-auto h-[300px] max-w-[600px] overflow-hidden rounded-3xl py-4 min-[480px]:px-4 md:pr-4 lg:w-1/3',
            {
              'bg-purple-pale/10': color === 'purple-pale',
              'bg-turquoise/10': color === 'turquoise',
              'bg-primary/10': color === 'primary',
            }
          )}
        >
          <div
            className={cn(
              'absolute mb-2 h-[30rem] w-[30rem] rounded-full lg:-right-[20rem]',
              {
                '-left-[20rem] -top-[15rem] bg-purple-pale/20':
                  color === 'purple-pale',
                '-right-[20rem] top-[5rem] bg-turquoise/20':
                  color === 'turquoise',
                '-right-[20rem] bottom-[5rem] bg-primary/20':
                  color === 'primary',
              }
            )}
          />
          <div className='flex h-full flex-col justify-between p-2'>
            <h3
              className={cn(
                'font-heading text-3xl font-normal leading-none tracking-tighter brightness-50 md:block',
                {
                  'text-turquoise': color === 'turquoise',
                  'text-primary': color === 'primary',
                  'text-purple-pale': color === 'purple-pale',
                }
              )}
            >
              {title}
            </h3>
            <p
              className={cn('text-base brightness-50', {
                'text-turquoise': color === 'turquoise',
                'text-primary': color === 'primary',
                'text-purple-pale': color === 'purple-pale',
              })}
            >
              {description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
