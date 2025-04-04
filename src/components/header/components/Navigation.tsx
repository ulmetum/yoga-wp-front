'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransitionRouter } from 'next-view-transitions'

import { GetMainMenuQuery } from '@/gql/graphql'
import { pageAnimation } from '@/utils/animations'
import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'

interface Props {
  data: GetMainMenuQuery | null
}

export const nonArticlePaths = [
  '/',
  '/blog/',
  '/contacto/',
  '/sobre-mi/',
  '/servicios/',
]

export const Navigation = ({ data }: Props) => {
  const pathname = usePathname()
  const router = useTransitionRouter()
  // Se elimina la barra final menos en el caso del Inicio
  const currentPath = pathname === '/' ? pathname : `${pathname}/`
  const isPageArticle = !nonArticlePaths.includes(currentPath)

  return (
    <nav>
      <ul className='container mx-auto flex items-center justify-center capitalize text-gray-600 dark:text-gray-300'>
        {data?.menuItems?.edges.map((item) => {
          const isActive = item.node.path === currentPath
          const url = item.node.path!

          return (
            <motion.li
              key={item.node.id}
              initial='initial'
              whileHover='hovered'
              className={cn(
                ' text-sm [@media(min-width:400px)]:text-lg xs:px-2 relative mx-1.5 overflow-hidden leading-tight sm:mx-3',
                isActive || (item.node.label === 'Blog' && isPageArticle)
                  ? 'pointer-events-none text-primary font-normal'
                  : 'pointer-events-auto text-dark'
              )}
            >
              <motion.div
                className={`font-headings uppercase sm:text-xl`}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: '-110%' },
                }}
                transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
              >
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(url, {
                      onTransitionReady: pageAnimation,
                    })
                  }}
                  href={url}
                >
                  {item.node.label}
                </Link>
              </motion.div>
              <motion.div
                className={`absolute inset-0 font-headings uppercase text-primary sm:text-xl`}
                variants={{
                  initial: { y: '110%' },
                  hovered: { y: 0 },
                }}
                transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
              >
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(url, {
                      onTransitionReady: pageAnimation,
                    })
                  }}
                  href={url}
                >
                  {item.node.label}
                </Link>
              </motion.div>
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}
