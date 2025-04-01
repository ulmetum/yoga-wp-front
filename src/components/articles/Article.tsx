import { DateArticle } from '@/components/articles/DateArticle'
import { MenuIcons } from '@/components/MenuIcons'
import { ImageArticle } from './ImageArticle'
import { cn } from '@/utils/mergeClass'
import { getRandomYogaSentence } from '@/utils/randomSentence'
import { CustomLink } from '../CustomLink'

interface Props {
  i: number
  title: string
  slug: string
  srcUrl: string
  createdAt: string
  subtitle: string
  type: 'blog' | 'search'
}

export const Article = ({
  i,
  title,
  slug,
  srcUrl,
  subtitle,
  createdAt,
  type,
}: Props) => {
  return (
    <li
      data-article={i + 1}
      className={cn(
        `article-item group mx-auto flex flex-col w-[min(100%,900px)] my-8`,
        {
          ' xl:gap-10 xl:first:flex-row xl:[&:nth-child(3)]:flex xl:[&:nth-child(3)]:flex-col-reverse xl:w-full xl:min-h-[35dvh] max-w-xl:my-8 max-w-xl:w-[min(100%,900px)]':
            type === 'blog',
        }
      )}
    >
      <div
        className={cn('relative h-[35dvh] overflow-hidden ', {
          'xl:h-full w-full': type === 'blog',
        })}
      >
        <CustomLink slug={slug}>
          <ImageArticle
            srcUrl={srcUrl}
            title={title}
          />
        </CustomLink>
        {/* <Link href={`/${slug}`}>
          <ImageArticle
            srcUrl={srcUrl}
            title={title}
          />
        </Link> */}
      </div>
      <article
        className={cn('mx-1 my-6 flex h-full flex-col gap-8', {
          'xl:group-first:w-1/2 xl:m-0': type === 'blog',
        })}
      >
        <CustomLink slug={slug}>
          <h3
            className={cn(
              '!my-0 text-center font-light text-secondary transition duration-700 ease-[var(--ease-elastic-smoother)] group-hover:text-primary ',
              {
                'xl:text-3xl': type === 'blog',
              }
            )}
          >
            {title}
          </h3>
        </CustomLink>
        {/* <Link href={`/${slug}`}>
          <h3
            className={cn(
              '!my-0 text-center font-light text-secondary transition duration-700 ease-[var(--ease-elastic-smoother)] group-hover:text-primary ',
              {
                'xl:text-3xl': type === 'blog',
              }
            )}
          >
            {title}
          </h3>
        </Link> */}
        <div className='mx-auto h-[1px] w-28 bg-secondary duration-700 ease-[var(--ease-elastic-smoother)] group-hover:w-44 group-hover:bg-primary'></div>

        <h5 className='max-w-[768px] my-0 mx-auto flex-1 text-center text-xl  font-light italic leading-6 text-gray-600'>
          {subtitle || getRandomYogaSentence()}
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
