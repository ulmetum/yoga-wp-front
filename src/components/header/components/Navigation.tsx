'use client'

import { GetMainMenuQuery } from '@/gql/graphql'
import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

interface Props {
  data: GetMainMenuQuery | null
}

const nonArticlePaths = ['/', '/blog', '/contacto', '/sobre-mi', '/servicios']

export const Navigation = ({ data }: Props) => {
  const pathname = usePathname()
  // Se elimina la barra final menos en el caso del Inicio
  const currentPath = pathname === '/' ? pathname : `${pathname}/`

  const isPageArticle = !nonArticlePaths.includes(currentPath)
  return (
    <nav>
      <ul className='container mx-auto flex items-center justify-center capitalize text-gray-600 dark:text-gray-300'>
        <div className='flex items-center gap-x-1 sm:gap-x-2'>
          {data?.menuItems?.edges.map((item, i) => {
            const isActive = item.node.path === currentPath
            return (
              <div key={item.node.id}>
                <motion.li
                  initial='initial'
                  whileHover='hovered'
                  className={cn(
                    'xs:px-2 relative mx-1.5 overflow-hidden leading-tight sm:mx-3',
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
                    <Link href={item.node.path!}>{item.node.label}</Link>
                  </motion.div>
                  <motion.div
                    className={`absolute inset-0 font-headings uppercase text-primary sm:text-xl`}
                    variants={{
                      initial: { y: '110%' },
                      hovered: { y: 0 },
                    }}
                    transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
                  >
                    <Link href={item.node.path!}>{item.node.label}</Link>
                  </motion.div>
                </motion.li>
              </div>
            )
          })}
        </div>
      </ul>
    </nav>
  )
}
