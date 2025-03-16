'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/utils/mergeClass'

import { BlobOne } from '@/components/icons/BlobOne.icon'
import { BlobTwo } from '@/components/icons/BlobTwo.icon'
import { BlobThree } from '@/components/icons/BlobThree.icon'
import { BlobFour } from '@/components/icons/BlobFour.icon'
import { PoseWomanThree } from '@/components/icons/PoseWomenThree.icon'
import { PoseWomanFive } from '@/components/icons/PoseWomanFive.icon'
import { PoseWomanFour } from '@/components/icons/PoseWomanFour.icon'
import { PoseWomanSix } from '@/components/icons/PoseWomanSix.icon'
import { variants } from '@/components/home/content/animations'

const dataChallenge = [
  {
    id: 1,
    title: 'Empoderamiento',
    description:
      'Dentro de ti hay una fuerza primigenia que ha de ser expresada de forma consciente para que puedas, por fin, ser tú misma y enfrentarte a todos los desafíos que la vida te presenta',
    Blob: BlobOne,
    Silhouette: PoseWomanThree,
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
  {
    id: 2,
    title: 'Confianza',
    description:
      'Llegarás a entender cómo valorarte más y a recuperar la confianza en ti misma para poder construir la vida que realmente deseas sin miedo.',
    Blob: BlobTwo,
    Silhouette: PoseWomanFive,
    bgColor: 'bg-turquoise/10',
    textColor: 'text-turquoise',
  },
  {
    id: 3,
    title: 'Libertad',
    description:
      'Podrás expresarte sin juicios ni prejuicios, y finalmente abrirte al mundo desde tu ser interior',
    Blob: BlobThree,
    Silhouette: PoseWomanFour,
    bgColor: 'bg-purple-pale/10',
    textColor: 'text-purple-pale brightness-50',
  },
  {
    id: 4,
    title: 'Autoestima',
    description:
      'Aprenderás a respetarte como ser humano y a encontrar la belleza intrínseca que reside en ti',
    Blob: BlobFour,
    Silhouette: PoseWomanSix,
    bgColor: 'bg-sky-pale/10',
    textColor: 'text-sky-950',
  },
] as const

export const ChallengeYoga = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'inView' : 'notInView'}
      transition={{ duration: 1.25, ease: 'easeOut' }}
      className='grid-challenge opacity-0 max-lg:space-y-4 xl:w-full'
    >
      {dataChallenge.map(
        (
          { id, title, textColor, Blob, Silhouette, bgColor, description },
          i
        ) => (
          <div
            key={id}
            data-challenge={i}
            className={cn(
              'group relative mx-auto h-[300px] w-[min(100%,600px)] overflow-hidden rounded-3xl',
              bgColor
            )}
          >
            <h2
              className={cn(
                'relative pr-4 !my-0 pt-4 text-right text-5xl brightness-50 transition-all duration-500 ease-[var(--ease)]',
                textColor
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                'absolute left-0 top-1/2 w-full -translate-y-1/2 scale-[95%] px-8 text-center font-normal leading-snug opacity-0 brightness-50 transition-all duration-500 ease-[var(--ease)] group-hover:scale-100 group-hover:opacity-100 lg:text-[1.35rem] xl:text-[1.4rem]',
                textColor
              )}
            >
              {description}
            </p>
            <div
              data-blob
              className='absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[var(--ease)] group-hover:scale-[700%]'
            >
              <Blob />
            </div>
            <div
              data-silhouette
              className='absolute bottom-[-4rem] h-full w-full scale-[85%] transition-all duration-500 ease-[var(--ease)] group-hover:scale-[100%] group-hover:opacity-20 xl:scale-75'
            >
              <Silhouette classNames='h-full w-full' />
            </div>
          </div>
        )
      )}
    </motion.div>
  )
}
