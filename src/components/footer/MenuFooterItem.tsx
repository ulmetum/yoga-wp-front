'use client'

import { Link } from 'next-view-transitions'

import { MenuItem } from '@/interfaces/main-menu.interface'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/mergeClass'

interface Props {
  item: MenuItem
}

export const FooterMenuItem = ({ item }: Props) => {
  const pathname = usePathname()

  const currentPath = pathname === '/' ? pathname : `${pathname}/`
  console.log({ pathname: pathname })
  console.log({ path: item.node.path })
  return (
    <Link
      href={item.node.path ?? '#'}
      key={item.node.id}
      className={cn('', {
        'pointer-events-none': currentPath === item.node.path,
      })}
    >
      <motion.li
        className='inline-block capitalize m-0 '
        initial='rest'
        whileHover='hover'
        animate='rest'
      >
        {item.node.label?.split('').map((char: string, i: number) => (
          <motion.span
            className={cn('font-headings text-3xl font-light md:text-4xl  ', {
              'font-normal': currentPath === item.node.path,
            })}
            key={i}
            variants={{
              rest: {
                textShadow: '0px 0px 0px rgba(24, 24, 27, 1)',
                color:
                  currentPath === item.node.path
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
        ))}
      </motion.li>
    </Link>
  )
}
