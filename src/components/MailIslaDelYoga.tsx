'use client'

import { motion } from 'motion/react'

export const MailIslaDelYoga = () => {
  return (
    <motion.span
      whileHover={{
        scale: 1.3,
        rotate: -3,
      }}
      transition={{
        duration: 1,
        type: 'spring',
        bounce: 0.55,
      }}
      id='span-email'
      className='inline-block scale-100 bg-white px-1 text-[.95rem] text-primary underline underline-offset-2 '
    >
      hola@laisladelyoga.com
    </motion.span>
  )
}
