'use client'

import { cn } from '@/utils/mergeClass'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  srcUrl: string
  title: string
}

export const ImageArticle = ({ srcUrl, title }: Props) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div
      className={cn(
        'h-full w-full transition-opacity duration-700 ease-(--ease-elastic-smooth)',
        {
          'opacity-100': isShow,
          'opacity-0': !isShow,
        }
      )}
    >
      <div className='gradient-tl-90 absolute inset-0 z-20'></div>
      <small className='font-headings absolute left-1 top-1 z-20 font-heading text-light'>
        Escrito por @Míriam
      </small>
      <div className='h-full w-full transition-all duration-700 ease-[var(--ease-elastic-smoother)] group-hover:scale-105 relative'>
        <Image
          sizes='100%'
          onLoad={() => setIsShow(true)}
          className={cn(`object-center `, {
            'object-cover': srcUrl,
            'object-contain': !srcUrl,
          })}
          src={srcUrl || '/images/placeholder.webp'}
          alt={title}
          fill
        />
      </div>
    </div>
  )
}
