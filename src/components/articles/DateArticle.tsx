import { cn } from '@/utils/mergeClass'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

interface Props {
  color?: 'alternative' | 'dark'
  createdAt: string
}

const colors = {
  alternative: 'text-primary',
  dark: 'text-dark',
}

export const DateArticle = ({ color = 'dark', createdAt }: Props) => {
  const date = dayjs(createdAt).format('MMMM D, YYYY')
  return (
    <small
      className={cn(
        'block w-[45%] font-headings font-normal capitalize leading-none',
        colors[color]
      )}
    >
      {date}
    </small>
  )
}
