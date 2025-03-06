import { cn } from '@/utils/mergeClass'
import Image from 'next/image'
import { DateArticle } from '@/components/articles/DateArticle'
import { MenuIcons } from '@/components/articles/MenuIcons'

interface Props {
  i: number
  title: string
  slug: string
  srcUrl: string
  excerpt: string
  createdAt: string
  subtitle: string
  // image: string
}

// const truncateText = (text: string, maxLength: number) => {
//   return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
// }

export const Post = ({
  i,
  title,
  slug,
  srcUrl,
  subtitle,
  createdAt,
}: Props) => {
  return (
    <li
      data-article={i + 1}
      className='group mx-auto flex flex-col max-w-xl:my-8 max-w-xl:w-[min(100%,900px)] xl:gap-10 xl:first:flex-row xl:[&:nth-child(3)]:flex xl:[&:nth-child(3)]:flex-col-reverse'
    >
      <div className='relative h-[300px] w-full '>
        <div className='absolute inset-0 z-10 bg-gradient-to-tl from-transparent to-black/75 transition-all duration-700 ease-[var(--ease-elastic-smoother)] group-hover:opacity-55'></div>
        <small className='absolute left-1 top-1 z-20 font-heading text-light'>
          Escrito por @Míriam
        </small>
        <Image
          className={cn(`s object-center`, {
            'object-cover': srcUrl,
            'object-contain': !srcUrl,
          })}
          src={srcUrl || '/images/placeholder.webp'}
          alt={title}
          fill
        />
      </div>
      <article className='mx-1 my-6 flex h-full flex-col gap-4 xl:m-0 xl:group-first:w-1/2'>
        <a href={`/${slug}`}>
          <h3 className='!my-0 text-center font-light text-secondary transition duration-700 ease-[var(--ease-elastic-smoother)] group-hover:text-primary xl:text-3xl'>
            {title}
          </h3>
        </a>
        <div className='mx-auto h-[1px] w-28 bg-secondary duration-700 ease-[var(--ease-elastic-smoother)] group-hover:w-44 group-hover:bg-primary'></div>
        {/* <h5
          dangerouslySetInnerHTML={{ __html: truncateText(excerpt, 300) }}
          className='subtitle-article'
        /> */}
        <h5 className='  max-w-[768px] my-0 mx-auto  flex-1 text-center text-lg font-light italic leading-6 text-gray-600'>
          {subtitle}
        </h5>
        <div className='flex items-end justify-between text-primary'>
          <DateArticle
            color='alternative'
            createdAt={createdAt}
          />
          <MenuIcons
            color='alternative'
            classNames='items-end gap-2 xl:gap-3'
          />
        </div>
      </article>
    </li>
  )
}
