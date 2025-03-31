'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

export const HeadingText = ({
  classNames,
  children,
  delayAnimation,
}: {
  classNames?: string
  children: React.ReactNode
  delayAnimation?: number
}) => {
  return (
    <div className={cn('overflow-hidden leading-none', classNames)}>
      <motion.h1
        initial={{ y: '135%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay: delayAnimation,
          ease: [0.83, 0, 0.17, 1],
        }}
        className={
          'relative m-1 font-headings tracking-wide font-bold uppercase leading-[1.15] [font-size:var(--fs-700)] sm:[font-size:var(--fs-700)]'
        }
      >
        {children}
      </motion.h1>
    </div>
  )
}
