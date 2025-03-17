import { cn } from '@/utils/mergeClass'
import { Link } from 'next-view-transitions'
interface Props {
  currentPage: number
  postsPerPage: number
  totalArticlesCount: number
}

export const PaginationBlog = ({
  currentPage,
  postsPerPage,
  totalArticlesCount,
}: Props) => {
  return totalArticlesCount === postsPerPage ? null : (
    <div className='my-16 flex flex-col items-center'>
      <span className='my-2 font-heading text-lg text-primary'>
        Mostrando{' '}
        <span className='font-heading text-primary'>
          {(currentPage - 1) * postsPerPage + 1}
        </span>{' '}
        a{' '}
        <span className='font-heading text-primary'>
          {Math.min(totalArticlesCount, postsPerPage * currentPage)}
        </span>{' '}
        de{' '}
        <span className='font-heading text-primary'>{totalArticlesCount}</span>{' '}
        entradas
      </span>

      <div className='xs:mt-0 mt-2 inline-flex space-x-2'>
        <Link
          href={`/blog/${currentPage - 1}`}
          className={cn(
            `group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 font-heading text-base font-medium text-primary transition-all duration-700 ease-[var(--ease)] hover:text-white`,
            {
              'pointer-events-none border-dark/20 text-dark/20':
                currentPage <= 1,
            }
          )}
        >
          <div
            className={cn(
              'absolute inset-0 -inset-x-2 -inset-y-2 top-[calc(100%+8px)] -z-[1] skew-y-6 bg-primary transition-all duration-700 ease-[var(--ease)] group-hover:-top-[30%]',
              {
                'pointer-events-none border-dark/20 text-dark/20':
                  currentPage <= 1,
              }
            )}
          />
          Anteriores
        </Link>
        <Link
          href={`/blog/${currentPage + 1}`}
          className={cn(
            'group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 font-heading text-base font-medium text-primary transition-all duration-700 ease-[var(--ease)] hover:text-white',
            {
              'pointer-events-none border-dark/20 text-dark/20':
                currentPage >= totalArticlesCount / postsPerPage,
            }
          )}
        >
          <div className='absolute inset-0 -inset-x-2 -inset-y-2 top-[calc(100%+8px)] -z-[1] -skew-y-6 bg-primary transition-all duration-700 ease-[var(--ease)] group-hover:-top-[30%]' />
          Siguientes
        </Link>
      </div>
    </div>
  )
}
