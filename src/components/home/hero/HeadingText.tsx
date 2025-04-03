import { cn } from '@/utils/mergeClass'

export const HeadingText = ({
  classNames,
  children,
  animationDelay,
}: {
  classNames?: string
  children: React.ReactNode
  animationDelay?: number
}) => {
  return (
    <div className={cn('overflow-hidden leading-none', classNames)}>
      <h1
        style={{ animationDelay: `${animationDelay}s` }}
        className={
          'translate-y-full animate-slideInUp relative m-1 font-headings tracking-wide font-bold uppercase leading-[1.15] [font-size:var(--fs-700)] sm:[font-size:var(--fs-700)]'
        }
      >
        {children}
      </h1>
    </div>
  )
}
