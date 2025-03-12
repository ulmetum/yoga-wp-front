import { WrittenBy } from '@/components/slug/WrittenBy'
import Image from 'next/image'

interface Props {
  author: string
  image: string
  title: string
}

export const FeaturedImageArticle = ({ author, image, title }: Props) => {
  return (
    <div className='container-image h-[400px] relative w-[min(100%,900px)]'>
      <WrittenBy
        author={author}
        classNames='font-headings absolute bottom-2 right-2 z-10 text-light'
      />
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          className='absolute object-cover'
          src={image || '/images/placeholder.webp'}
          alt={title}
          // width={300}
          // height={200}
          fill
          priority
        />
      </div>
      <div className='gradient-br-90 absolute inset-0'></div>
    </div>
  )
}
