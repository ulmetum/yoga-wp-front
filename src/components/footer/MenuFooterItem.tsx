'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { MenuItem } from '@/interfaces/main-menu.interface'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/mergeClass'
import { nonArticlePaths } from '@/components/header/components/Navigation'
import { pageAnimation } from '@/utils/animations'
import Link from 'next/link'

interface Props {
  item: MenuItem
}

export const FooterMenuItem = ({ item }: Props) => {
  const pathname = usePathname()
  const router = useTransitionRouter()
  const url = item.node.path!

  const currentPath = pathname === '/' ? pathname : `${pathname}/`
  const isPageArticle = !nonArticlePaths.includes(currentPath)
  const isActive = item.node.path === currentPath
  return (
    <Link
      href={url}
      onClick={(e) => {
        e.preventDefault()
        router.push(url, {
          onTransitionReady: pageAnimation,
        })
      }}
      className={cn('', {
        'pointer-events-none':
          isActive || (item.node.label === 'Blog' && isPageArticle),
      })}
    >
      <motion.li
        className='inline-block capitalize m-0 '
        initial='rest'
        whileHover='hover'
        animate='rest'
      >
        {item.node.label?.split('').map((char: string, i: number) => {
          return (
            <motion.span
              className={cn('font-headings text-3xl font-light md:text-4xl  ', {
                'font-normal':
                  isActive || (item.node.label === 'Blog' && isPageArticle),
              })}
              key={i}
              variants={{
                rest: {
                  textShadow: '0px 0px 0px rgba(24, 24, 27, 1)',
                  color:
                    isActive || (item.node.label === 'Blog' && isPageArticle)
                      ? 'var(--primary)'
                      : 'var(--dark)',
                  opacity: 0.85,
                  transition: { delay: i * 0.05, duration: 0.15 },
                },
                hover: {
                  opacity: 1,
                  color: 'var(--primary)',
                  textShadow: '1px 0px 1px rgba(217, 119, 6, 0.75)',
                  transition: { delay: i * 0.05, duration: 0.15 },
                },
              }}
            >
              {char}
            </motion.span>
          )
        })}
      </motion.li>
    </Link>
  )
}
