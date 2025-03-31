'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

export const AnimatedTitle = ({
  text,
  classNamesContainer,
  classNamesTitle,
}: {
  text: string
  classNamesContainer?: string
  classNamesTitle?: string
}) => {
  return (
    <div className='mb-6'>
      <h1
        className={cn('mb-0 overflow-hidden leading-none', classNamesContainer)}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5 + index * 0.1,
              ease: [0.83, 0, 0.17, 1],
            }}
            className={cn(
              'font-headings font-bold text-4xl sm:text-5xl inline-block mr-4',
              classNamesTitle
            )}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}
