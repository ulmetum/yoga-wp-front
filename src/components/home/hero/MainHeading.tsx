import { HeadingText } from '@/components/home/hero/HeadingText'

export const MainHeading = () => {
  return (
    <div className='max-xl:text-center xl:mt-[calc(var(--header-height)*2)] xl:flex xl:flex-1 xl:items-center'>
      <div>
        <HeadingText classNames='sm:text-start xl:left-[-29%]'>
          Mejora
        </HeadingText>
        <HeadingText classNames='xl:left-[-15%]'>tu vida</HeadingText>
        <HeadingText>a través de la</HeadingText>
      </div>
    </div>
  )
}
