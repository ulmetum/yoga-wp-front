import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  children: React.ReactNode
}

export const Container = ({ classNames, children }: Props) => {
  return (
    <div className={cn('mx-auto w-[min(100%,1440px)]', classNames)}>
      {children}
    </div>
  )
}
