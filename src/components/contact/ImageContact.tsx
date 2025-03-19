'use client'

import { PoseWomanEight } from '@/components/icons/PoseWomanEight.icon'
import { motion } from 'motion/react'

export const ImageContact = () => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      <PoseWomanEight />
    </motion.div>
  )
}
