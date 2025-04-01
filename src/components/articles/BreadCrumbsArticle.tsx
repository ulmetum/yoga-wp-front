'use client'

import { pageAnimation } from '@/utils/animations'
import { useTransitionRouter } from 'next-view-transitions'
import Link from 'next/link'

const formatPathTitle = (path: string) =>
  path
    .replace('/articles/', '')
    .replace(/-/g, ' ') // Remplazar guiones con espacios sin parar en el primero que encuentre
    .replace(/^./, (str) => str.toUpperCase())

export const BreadCrumbsArticle = ({ title }: { title: string }) => {
  const router = useTransitionRouter()
  const slug = formatPathTitle(title)
  return (
    <div className='text-center xl:text-left my-8'>
      <Link
        onClick={(e) => {
          e.preventDefault()
          router.push('/', {
            onTransitionReady: pageAnimation,
          })
        }}
        className='font-headings text-xl font-light transition-colors duration-300 hover:text-primary'
        href={'/'}
      >
        Inicio<span className='mx-1'>-</span>
      </Link>
      <Link
        onClick={(e) => {
          e.preventDefault()
          router.push('/blog', {
            onTransitionReady: pageAnimation,
          })
        }}
        className='font-headings text-xl font-light transition-colors duration-300 hover:text-primary'
        href='/blog'
      >
        Blog<span className='mx-1'>-</span>
      </Link>
      <span className='font-headings text-xl font-light capitalize text-primary'>
        {slug}
      </span>
    </div>
  )
}
