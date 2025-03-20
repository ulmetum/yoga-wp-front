'use client'

import { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

interface Props {
  children: ReactNode
}

export function ScrollLayout({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>
}
