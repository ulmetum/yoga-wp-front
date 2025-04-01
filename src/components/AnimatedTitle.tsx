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
    <div className={cn('mb-6', classNamesContainer)}>
      <h1 className='mb-0 overflow-hidden leading-none'>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            className='inline-block overflow-hidden '
          >
            <motion.span
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.1,
                ease: [0.83, 0, 0.17, 1],
              }}
              className={cn(
                'font-headings  font-normal text-3xl sm:text-5xl md:text-6xl xl:text-7xl  inline-block',
                classNamesTitle
              )}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  )
}
