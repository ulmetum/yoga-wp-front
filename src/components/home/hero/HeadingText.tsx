import { cn } from '@/utils/mergeClass'

export const HeadingText = ({
  classNames,
  children,
}: {
  classNames?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'relative font-headings font-bold uppercase leading-[1.15] [font-size:var(--fs-700)] sm:[font-size:var(--fs-700)]',
        classNames
      )}
    >
      {children}
    </p>
  )
}
