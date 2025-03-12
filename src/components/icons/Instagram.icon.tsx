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

export const Instagram = ({ size = 'md', color = 'dark' }: Props) => {
  return (
    <svg
      className={cn(
        'transition-transform duration-500 ease-[var(--ease-elastic-smoother)] hover:scale-125',
        sizes[size]
      )}
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 24 24'
    >
      <circle
        cx='17'
        cy='7'
        r='1.5'
        fill={colors[color]}
        fillOpacity='0'
      >
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='1.3s'
          dur='0.15s'
          values='0;1'
        ></animate>
      </circle>
      <g
        fill='none'
        stroke={colors[color]}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path
          strokeDasharray='72'
          strokeDashoffset='72'
          d='M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='72;0'
          ></animate>
        </path>
        <path
          strokeDasharray='28'
          strokeDashoffset='28'
          d='M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.7s'
            dur='0.6s'
            values='28;0'
          ></animate>
        </path>
      </g>
    </svg>
  )
}
