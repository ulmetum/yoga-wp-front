import { DateArticle } from '@/components/slug/DateArticle'
import { MenuIcons } from '@/components/articles/MenuIcons'

interface Props {
  title: string
  subtitle: string
  createdAt: string
}

export const HeadingArticle = ({ title, subtitle, createdAt }: Props) => {
  return (
    <div className='relative mx-auto mt-28 flex w-[min(100%,900px)] flex-col items-center justify-center gap-4 px-2 motion-duration-700 motion-ease-spring-bouncier max-xl:motion-preset-slide-up-sm xl:motion-preset-slide-left-sm xl:mt-0 xl:w-[60%]'>
      <div className='absolute h-[165%] w-[15%] border-2 border-primary brightness-[.85] md:w-[10%] xl:w-[75px]'></div>
      <div className='relative w-full bg-light py-4'>
        <h2 className='text-center leading-none text-secondary'>{title}</h2>
        <small className='my-6 block text-center text-sm italic leading-normal text-light brightness-[.35]'>
          {subtitle}
        </small>
        <div className='flex items-center justify-center md:justify-between'>
          <DateArticle
            color='alternative'
            createdAt={createdAt}
          />
          <div className='mx-4 h-[2px] w-[min(15%,70px)] bg-primary'></div>
          <MenuIcons
            color='alternative'
            classNames='w-[45%] justify-end gap-2'
          />
        </div>
      </div>
    </div>
  )
}
