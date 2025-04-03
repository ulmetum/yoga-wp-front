import { cn } from '@/utils/mergeClass'

export const AnimatedTitle = ({
  text,
  classNamesContainer,
  classNamesTitle,
}: {
  text: string
  classNamesContainer?: string
  classNamesTitle?: string
}) => {
  return (
    <div className={cn('mb-6', classNamesContainer)}>
      <h1 className='mb-0 overflow-hidden leading-none'>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            className='inline-block overflow-hidden '
          >
            <span
              style={{
                animationDelay: `${0.5 + index * 0.1}s`,
              }}
              className={cn(
                `translate-y-full animate-slideInUp font-headings font-normal text-3xl sm:text-5xl md:text-6xl xl:text-7xl  inline-block`,
                classNamesTitle
              )}
            >
              {word}&nbsp;
            </span>
          </span>
        ))}
      </h1>
    </div>
  )
}
