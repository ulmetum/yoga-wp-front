import { cn } from '@/utils/mergeClass'
import dayjs from 'dayjs'

interface Props {
  color: 'alternative' | 'dark'
  createdAt: string
}

const colors = {
  alternative: 'text-primary',
  dark: 'text-text',
}

export const DateArticle = ({ color = 'dark', createdAt }: Props) => {
  return (
    <small
      className={cn(
        'block w-[45%] font-heading font-normal capitalize leading-none',
        colors[color]
      )}
    >
      {dayjs(createdAt).format('MMMM D, YYYY')}
    </small>
  )
}
