'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

export const AnimationYoga = ({
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
              y: even ? [100, 0] : [-100, 0],
            }}
            transition={{
              duration: 1.5,
              repeatDelay: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.83, 0, 0.17, 1],
            }}
            className={cn(
              'inline-block w-[49px] text-8xl uppercase font-headings text-center text-primary font-extrabold',
              { 'translate-y-full': even, '-translate-y-full': !even }
            )}
          >
            {char}
          </motion.span>
        )
      })}
    </div>
  )
}
