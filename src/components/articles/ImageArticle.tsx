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
    <Image
      sizes='100%'
      onLoad={() => setIsShow(true)}
      className={cn(
        `object-center transition-opacity duration-700 ease-(--ease-elastic-smooth)`,
        {
          'object-cover': srcUrl,
          'object-contain': !srcUrl,
          'opacity-100': isShow,
          'opacity-0': !isShow,
        }
      )}
      src={srcUrl || '/images/placeholder.webp'}
      alt={title}
      fill
    />
  )
}
