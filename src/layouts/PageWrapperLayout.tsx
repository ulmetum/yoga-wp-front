'use client'

import { motion } from 'motion/react'

export const PageWrapperLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
