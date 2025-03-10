import { WrittenBy } from '@/components/slug/WrittenBy'
import Image from 'next/image'

interface Props {
  author: string
  image: string
  title: string
}

export const FeaturedImageArticle = ({ author, image, title }: Props) => {
  return (
    <div className='container-image relative h-[360px] w-full motion-duration-700 motion-ease-spring-bouncier max-xl:motion-preset-slide-down-sm xl:motion-preset-slide-right-sm lg:w-[900px] xl:w-[40%]'>
      <WrittenBy
        author={author}
        classNames='absolute bottom-2 right-2 z-10 text-light'
      />
      <Image
        className='block h-full w-full object-cover'
        src={image || '/images/placeholder.webp'}
        alt={title}
        width={300}
        height={200}
        priority
      />
      <div className='gradient-90 absolute inset-0'></div>
    </div>
  )
}
