import { cn } from '@/utils/mergeClass'

interface Props {
  size?: 'small' | 'medium' | 'large'
  color?: 'alternative' | 'dark'
  classNames?: string
}
const colors = {
  alternative: '#b45309',
  dark: '#18181b',
}
export const Close = ({
  color = 'dark',
  size = 'medium',
  classNames,
}: Props) => {
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
        'icon icon-tabler icons-tabler-outline icon-tabler-x transition-transform duration-500 ease-[var(--ease-elastic-smoother)] hover:scale-125',
        classNames,
        {
          'h-5 w-5': size === 'small',
          'h-8 w-8': size === 'medium',
          'h-10 w-10': size === 'large',
        }
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
