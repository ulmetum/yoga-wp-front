import { cn } from '@/utils/mergeClass'

interface Props {
  author: string
  classNames?: string
}

export const WrittenBy = ({ classNames, author }: Props) => {
  return (
    <small className={cn('font-heading', classNames)}>
      Escrito por @{author}
    </small>
  )
}
