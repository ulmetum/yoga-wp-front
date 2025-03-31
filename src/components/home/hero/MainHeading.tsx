import { HeadingText } from '@/components/home/hero/HeadingText'

export const MainHeading = () => {
  return (
    <div className='max-xl:text-center xl:mt-[calc(var(--header-height)*2)] xl:flex xl:flex-1 xl:items-center'>
      <div>
        <HeadingText
          delayAnimation={0.25}
          classNames=' xl:left-[-29%] flex justify-center xl:justify-start'
        >
          Mejora
        </HeadingText>
        <HeadingText
          delayAnimation={0.35}
          classNames='xl:left-[-15%] flex justify-center xl:justify-start'
        >
          tu vida
        </HeadingText>
        <HeadingText delayAnimation={0.45}>a través de la</HeadingText>
      </div>
    </div>
  )
}
