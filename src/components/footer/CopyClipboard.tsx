'use client'

import { cn } from '@/utils/mergeClass'
import { useRef, useState } from 'react'

interface Props {
  color?: 'light' | 'dark' | 'amber'
}

const textColor = {
  light: 'text-light',
  dark: 'text-dark',
  amber: 'text-primary',
}

export const CopyClipboard = ({ color = 'light' }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsvisible] = useState<'default' | 'copy' | 'copied'>(
    'default'
  )

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleMouseClick = () => {
    setIsvisible('copied')
    const text = ref.current?.innerText
    if (text) {
      copyText(text)
      setIsvisible('copied')
    }
  }

  const handleMouseEnter = () => {
    setIsvisible('copy')
  }
  const handleMouseLeave = () => {
    setIsvisible('default')
  }

  return (
    <div
      className='group relative h-8 overflow-hidden sm:h-12'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      <p
        ref={ref}
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'copy' && 'duration-500 -translate-y-[100%]',
          isVisible === 'copied' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        descubriendolosastros@gmail.com
      </p>

      <p
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'copy' && 'duration-500 -translate-y-[100%]',
          isVisible === 'copied' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        Clic para copiar
      </p>
      <p
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'copy' && 'duration-500 -translate-y-[100%]',
          isVisible === 'copied' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        Email copiado!
      </p>
    </div>
  )
}
