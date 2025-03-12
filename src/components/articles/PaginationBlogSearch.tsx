import { SearchResult } from '@/interfaces/articles.interface'
import { cn } from '@/utils/mergeClass'
import { Link } from 'next-view-transitions'
interface Props {
  currentPage: number
  query: string
  searchResult: SearchResult | null
}

export const PaginationBlogSearch = ({
  currentPage,
  query,
  searchResult,
}: Props) => {
  return (
    <div className='xs:mt-0 mt-2 flex justify-center space-x-2'>
      <Link
        href={`/blog/${currentPage - 1}/?query=${query}`}
        className={cn(
          `group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 font-heading text-base font-medium text-primary transition-all duration-700 ease-[var(--ease)] hover:text-white`,
          {
            'pointer-events-none border-text/20 text-dark/20': currentPage <= 1,
          }
        )}
      >
        <div
          className={cn(
            'absolute inset-0 -inset-x-2 -inset-y-2 top-[calc(100%+8px)] -z-[1] skew-y-6 bg-primary transition-all duration-700 ease-[var(--ease)] group-hover:-top-[30%]',
            {
              'pointer-events-none border-text/20 text-dark/20':
                currentPage <= 1,
            }
          )}
        />
        Anteriores
      </Link>
      <Link
        href={`/blog/${currentPage + 1}/?query=${query}`}
        className={cn(
          'group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 font-heading text-base font-medium text-primary transition-all duration-700 ease-[var(--ease)] hover:text-white',
          {
            'pointer-events-none border-text/20 text-dark/20':
              !searchResult?.data?.posts?.pageInfo.hasNextPage,
          }
        )}
      >
        <div className='absolute inset-0 -inset-x-2 -inset-y-2 top-[calc(100%+8px)] -z-[1] -skew-y-6 bg-primary transition-all duration-700 ease-[var(--ease)] group-hover:-top-[30%]' />
        Siguientes
      </Link>
    </div>
  )
}
