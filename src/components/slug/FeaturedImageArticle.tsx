'use client'

import { WrittenBy } from '@/components/slug/WrittenBy'
import { motion } from 'motion/react'
import Image from 'next/image'

interface Props {
  author: string
  image: string
  title: string
}

export const FeaturedImageArticle = ({ author, image, title }: Props) => {
  return (
    <motion.div
      initial={{
        x: 'var(--translate-x-from, 0)',
        y: 'var(--translate-y-from, 0)',
      }}
      animate={{ x: 'var(--translate-x-to, 0)', y: 'var(--translate-y-to, 0)' }}
      transition={{ duration: 1, type: 'spring', bounce: 0.55 }}
      className='[--translate-y-from:-50px] [--translate-y-to:0px] xl:[--translate-y-from:0px] xl:[--translate-x-from:-50px] xl:[--translate-x-to:0px] container-image h-[400px] relative w-[min(100%,900px)]'
    >
      <WrittenBy
        author={author}
        classNames='font-headings absolute bottom-2 right-2 z-10 text-light'
      />
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          className='absolute object-cover'
          src={image || '/images/placeholder.webp'}
          alt={title}
          // width={300}
          // height={200}
          fill
          priority
        />
      </div>
      <div className='gradient-br-90 absolute inset-0'></div>
    </motion.div>
  )
}
