import { cn } from '@/utils/mergeClass'

interface Props {
  size?: 'small' | 'medium' | 'large'
  color?: 'alternative' | 'dark'
}

const colors = {
  alternative: '#b45309',
  dark: '#18181b',
}

export const Spotify = ({ size = 'medium', color = 'dark' }: Props) => {
  return (
    <svg
      className={cn(
        'transition-transform duration-500 ease-[var(--ease-elastic-smoother)] hover:scale-125',
        {
          'h-7 w-7': size === 'small',
          'h-8 w-8': size === 'medium',
          'h-10 w-10': size === 'large',
        }
      )}
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke={colors[color]}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <path
          strokeDasharray='64'
          strokeDashoffset='64'
          d='M2 12c0 -5.52 4.48 -10 10 -10c5.52 0 10 4.48 10 10c0 5.52 -4.48 10 -10 10c-5.52 0 -10 -4.48 -10 -10Z'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='64;0'
          ></animate>
        </path>
        <path
          strokeDasharray='8'
          strokeDashoffset='8'
          d='M8.63 15.31c2.18 -0.58 4.49 -0.34 6.5 0.69'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.6s'
            dur='0.2s'
            values='8;0'
          ></animate>
        </path>
        <path
          strokeDasharray='12'
          strokeDashoffset='12'
          d='M7.5 12.07c1.1 -0.37 2.28 -0.57 3.5 -0.57c2.02 0 3.92 0.55 5.55 1.5'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.8s'
            dur='0.2s'
            values='12;0'
          ></animate>
        </path>
        <path
          strokeDasharray='14'
          strokeDashoffset='14'
          d='M7 8.91c1.38 -0.59 2.9 -0.91 4.5 -0.91c2.41 0 4.65 0.74 6.5 2'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1s'
            dur='0.2s'
            values='14;0'
          ></animate>
        </path>
      </g>
    </svg>
  )
}
