'use client'

import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { cn } from '@/utils/mergeClass'

const ROTATION_RANGE = 35
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2

const PERSPECTIVE = '1500px'

export const TiltShineCard = ({
  src,
  classNamesContainer,
  classNamesInner,
}: {
  src: string
  classNamesContainer?: string
  classNamesInner?: string
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className={cn('', classNamesContainer)}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
        }}
        className={cn(
          'aspect-[9/13] shadow-2xl shadow-zinc-950',
          classNamesInner
        )}
      >
        <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className='absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50'
        />
      </motion.div>
    </div>
  )
}
