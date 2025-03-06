import { cn } from '@/utils/mergeClass'

interface Props {
  size?: 'small' | 'medium' | 'large'
  color?: 'alternative' | 'dark'
}

const colors = {
  alternative: '#b45309',
  dark: '#18181b',
}

export const Youtube = ({ size = 'medium', color = 'dark' }: Props) => {
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
      <path
        fill={colors[color]}
        fillOpacity='0'
        d='M12 11L12 12L12 13z'
      >
        <animate
          fill='freeze'
          attributeName='d'
          begin='0.6s'
          dur='0.2s'
          values='M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z'
        ></animate>
        <set
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s'
          to='1'
        ></set>
      </path>
      <path
        fill='none'
        stroke={colors[color]}
        strokeDasharray='64'
        strokeDashoffset='64'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.6s'
          values='64;0'
        ></animate>
      </path>
    </svg>
  )
}
