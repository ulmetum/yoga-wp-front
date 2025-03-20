'use client'

import { motion } from 'motion/react'
import { GetMainMenuQuery } from '@/gql/graphql'
import { useHidden } from '@/hooks/useHidden'
import { Navigation } from '@/components/header/components/Navigation'
import { MenuLine } from '@/components/header/components/MenuLine'
import { LogoIsla } from '@/components/icons/LogoIsla.icon'

interface Props {
  data: GetMainMenuQuery | null
}

export const Navbar = ({ data }: Props) => {
  const { isHidden, updateIsHidden } = useHidden()

  return (
    <motion.div
      animate={isHidden ? 'hidden' : 'show'}
      onHoverStart={() => updateIsHidden(false)}
      onFocusCapture={() => updateIsHidden(false)}
      variants={{
        hidden: {
          y: '-90%',
          backgroundColor: 'rgb(255 255 255 / 1)',
          opacity: 0.75,
        },
        show: {
          y: '0%',
          backgroundColor: 'rgb(255 255 255 / .9)',
          opacity: 1,
        },
      }}
      transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      className={`fixed inset-x-1 top-0 z-[9990] mx-auto mt-2 flex max-w-7xl items-center justify-center sm:justify-between shadow-lg rounded-lg px-2 py-4 backdrop-blur-sm h-[var(--main-header-height)]`}
    >
      <div className='hidden sm:block'>
        <LogoIsla />
      </div>
      <Navigation data={data} />
      <MenuLine isHidden={isHidden} />
    </motion.div>
  )
}
