'use client'

import React from 'react'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

import { pageAnimation } from '@/utils/animations'

export const CustomLink = ({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) => {
  const router = useTransitionRouter()
  return (
    <Link
      onClick={(e) => {
        e.preventDefault()
        router.push(`/${slug}`, {
          onTransitionReady: pageAnimation,
        })
      }}
      href={`/${slug}`}
    >
      {children}
    </Link>
  )
}
