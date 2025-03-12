import { cn } from '@/utils/mergeClass'

interface Props {
  author: string
  classNames?: string
}

export const WrittenBy = ({ classNames, author }: Props) => {
  return <small className={cn('', classNames)}>Escrito por @{author}</small>
}
