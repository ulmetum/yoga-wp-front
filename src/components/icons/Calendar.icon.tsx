import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Calendar = ({ classNames, size }: Props) => {
  return (
    <svg
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-calendar-due',
        classNames,
        {
          'h-5 w-5': size === 'sm',
          'h-8 w-8': size === 'md',
          'h-10 w-10': size === 'lg',
        }
      )}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      ></path>
      <path d='M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
      <path d='M16 3v4'></path>
      <path d='M8 3v4'></path>
      <path d='M4 11h16'></path>
      <path d='M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
    </svg>
  )
}
