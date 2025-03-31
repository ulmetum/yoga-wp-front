'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

export const AnimationIsla = ({
  text,
  classNames,
}: {
  text: string
  classNames?: string
}) => {
  return (
    <div className={cn(' flex justify-center', classNames)}>
      {text.split('').map((char, index) => {
        const even = index % 2 === 0
        return (
          <motion.span
            key={index}
            animate={{
              y: even ? [0, -100] : [0, 100],
            }}
            transition={{
              duration: 1.5,
              repeatDelay: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.83, 0, 0.17, 1],
            }}
            className={cn(
              ' inline-block w-[49px] text-8xl uppercase font-headings text-center translate-y-0 font-bold'
              // { 'translate-y-0': even, 'translate-y-0': !even }
            )}
          >
            {char}
          </motion.span>
        )
      })}
    </div>
  )
}
