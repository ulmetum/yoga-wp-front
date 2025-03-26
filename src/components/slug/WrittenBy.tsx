import { cn } from '@/utils/mergeClass'

interface Props {
  author: string
  classNames?: string
}

export const WrittenBy = ({ classNames, author }: Props) => {
  const nameAuthor = author.includes('@') ? author.split('@')[1] : author
  return <small className={cn('', classNames)}>Escrito por @{nameAuthor}</small>
}
