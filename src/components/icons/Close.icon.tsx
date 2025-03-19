import { cn } from '@/utils/mergeClass'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'alternative' | 'dark' | 'light'
  classNames?: string
}
const colors = {
  alternative: 'var(--primary)',
  dark: 'var(--dark)',
  light: 'var(--light)',
}

const sizes = {
  xs: 'h-5 w-5 sm:h-6 sm:w-6',
  sm: 'h-7 w-7',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}
export const Close = ({ color = 'dark', size = 'md', classNames }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke={colors[color]}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn(
        'hover:stroke-primary h- icon icon-tabler icons-tabler-outline icon-tabler-x transition-all duration-300 ease-[var(--ease-elastic-smoother)] hover:scale-125',
        classNames,
        sizes[size]
      )}
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  )
}
