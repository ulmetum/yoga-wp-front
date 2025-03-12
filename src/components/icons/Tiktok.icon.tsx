import { cn } from '@/utils/mergeClass'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'alternative' | 'dark'
}

const colors = {
  alternative: '#b45309',
  dark: '#18181b',
}

const sizes = {
  xs: 'h-5 w-5 sm:h-7 sm:w-7',
  sm: 'h-7 w-7',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}

export const Tiktok = ({ size = 'md', color = 'dark' }: Props) => {
  return (
    <svg
      className={cn(
        'transition-transform duration-500 ease-[var(--ease-elastic-smoother)] hover:scale-125',
        sizes[size]
      )}
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
    >
      <mask id='lineMdTiktok0'>
        <g
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        >
          <path
            fill='#fff'
            stroke='none'
            d='M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z'
          ></path>
          <path
            stroke='#000'
            strokeDasharray='36'
            strokeDashoffset='72'
            strokeWidth='4'
            d='M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5'
          >
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              dur='0.6s'
              values='72;36'
            ></animate>
          </path>
          <path
            stroke='#000'
            strokeDasharray='10'
            strokeDashoffset='20'
            strokeWidth='4'
            d='M18 2.5v8'
          >
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='0.5s'
              dur='0.1s'
              values='20;10'
            ></animate>
          </path>
        </g>
      </mask>
      <rect
        width='24'
        height='24'
        fill={colors[color]}
        mask='url(#lineMdTiktok0)'
      ></rect>
    </svg>
  )
}
