'use client'

import { GetArticleByIdQuery } from '@/gql/graphql'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent } from 'react'

interface Props {
  nextArticle: GetArticleByIdQuery | null | undefined
  prevArticle: GetArticleByIdQuery | null | undefined
}

export const PaginationArticle = ({ nextArticle, prevArticle }: Props) => {
  const {
    mousePosition,
    hoveredImage,
    handleHoverEnd,
    handleHoverStart,
    handleMouseMove,
  } = useMouseParallax({ movement: -50 })

  const prevUrlArticle = prevArticle?.post?.slug
  const nextUrlArticle = nextArticle?.post?.slug
  const prevImage = prevArticle?.post?.featuredImage?.node.sourceUrl
  const prevTitleArticle = prevArticle?.post?.title
  const nextImage = nextArticle?.post?.featuredImage?.node.sourceUrl
  const nextTitleArticle = nextArticle?.post?.title

  return (
    <div className='space-y-8 border-t px-4 py-16 text-center font-headings text-amber-900 lg:flex lg:items-center lg:justify-between lg:space-y-0'>
      <Link
        href={`/${prevUrlArticle}`}
        className='relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2'
      >
        <AnimatePresence>
          {hoveredImage === 2 && (
            <motion.div
              className='pointer-events-none absolute bottom-full aspect-video h-[125px] w-[200px] object-cover'
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <Image
                className='aspect-video  rounded object-cover'
                fill
                sizes='100%'
                src={`${prevImage}`}
                alt='Imagen destacada del post siguiente'
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e: MouseEvent<HTMLHeadingElement>) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(2)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className='w-max cursor-pointer text-4xl text-primary lg:text-[2.75rem]'
        >
          {prevTitleArticle}
        </motion.h4>
      </Link>
      <Link
        href={`/${nextUrlArticle}`}
        className='relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2'
      >
        <AnimatePresence>
          {hoveredImage === 1 && (
            <motion.div
              className='pointer-events-none absolute bottom-full aspect-video h-[125px] w-[200px] object-cover'
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              <Image
                fill
                sizes='100%'
                src={`${nextImage}`}
                alt='Imagen destacada del post previo'
                className='aspect-video  rounded object-cover'
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e: MouseEvent<HTMLHeadingElement>) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(1)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className='w-max cursor-pointer text-4xl text-primary lg:text-[2.75rem]'
        >
          {nextTitleArticle}
        </motion.h4>
      </Link>
    </div>
  )
}
