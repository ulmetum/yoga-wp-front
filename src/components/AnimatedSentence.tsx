'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

export const AnimatedSentence = ({
  text,
  classNames,
}: {
  text: string
  classNames?: string
}) => {
  return (
    <div className='mb-6'>
      <h1 className={cn('mb-0 overflow-hidden leading-none', classNames)}>
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
            className='font-headings font-bold text-4xl sm:text-5xl lg:text-7xl inline-block mr-4'
          >
            {word}
          </motion.span>
        ))}
        {/* <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.83, 0, 0.17, 1],
          }}
          className='font-headings font-bold text-4xl sm:text-5xl lg:text-7xl  inline-block'
        >
          R.
        </motion.span>{' '}
        <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: [0.83, 0, 0.17, 1],
          }}
          className='font-headings font-bold text-4xl sm:text-5xl lg:text-7xl inline-block'
        >
          Vázquez
        </motion.span> */}
      </h1>
    </div>
  )
}
