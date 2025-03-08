'use client'

import { GetMainMenuQuery } from '@/gql/graphql'
import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'
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
  console.log({ currentPath })
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
                    isActive
                      ? 'pointer-events-none text-primary'
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
                    {/* <Link href={item.url}>{item.label}</Link> */}
                    <a href={item.node.path!}>{item.node.label}</a>
                  </motion.div>
                  <motion.div
                    className={`absolute inset-0 font-headings uppercase text-primary sm:text-xl`}
                    variants={{
                      initial: { y: '110%' },
                      hovered: { y: 0 },
                    }}
                    transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
                  >
                    <a href={item.node.path!}>{item.node.label}</a>
                  </motion.div>
                </motion.li>
              </div>
              // <li
              //   className={cn('mx-2 overflow-hidden', {
              //     'pointer-events-none ': item.node.path === currentPath,
              //   })}
              //   key={item.node.id}
              // >
              //   <a
              //     href={item.node.path!}
              //     className='group relative  uppercase'
              //   >
              //     <span
              //       className={cn(
              //         'block font-headings text-sm font-normal transition-all duration-[700ms] ease-[var(--ease-elastic-smooth)] group-hover:-translate-y-full min-[480px]:text-lg md:text-xl',
              //         {
              //           'text-primary': isActive,
              //         }
              //       )}
              //     >
              //       {item.node.label}
              //     </span>
              //     <span
              //       className={cn(
              //         'absolute left-0 top-full font-headings text-sm font-normal text-primary transition-all duration-[700ms] ease-[var(--ease-elastic-smooth)] group-hover:top-0 min-[480px]:text-lg md:text-xl'
              //       )}
              //     >
              //       {item.node.label}
              //     </span>
              //   </a>
              // </li>
            )
          })}
        </div>
      </ul>
    </nav>
  )
}
