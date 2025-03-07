import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { getTotalArticlestAction } from '@/actions/articles/get-total-articles.action'
import { PaginationBlog } from '@/components/articles/PaginationBlog'
import { Article } from '@/components/articles/Article'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { SearchBar } from '@/components/articles/SearchBar'
import { ListOfArticles } from '@/components/articles/ListOfArticles'
import { getSearchResult } from '@/actions/articles/getSearchResult.action'
import { cn } from '@/utils/mergeClass'
// import { ButtonsPagination } from '@/components/articles/ButtonsPagination'
// import { wrap } from '@/utils/wrap'

interface Props {
  params: Promise<{ page: string }>
  searchParams: Promise<{ query: string }>
}

const POSTS_PER_PAGE = 4

const cursorCache: Record<number, string | null> = {}
const cursorCacheSearch: Record<number, string | null> = {}

export default async function BlogPage({ params, searchParams }: Props) {
  const { page } = await params
  const { query = '' } = await searchParams

  const { totalArticles } = await getTotalArticlestAction()

  const totalPages = Math.ceil(Number(totalArticles) / POSTS_PER_PAGE)

  let currentPage = Number(page)

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    currentPage = 1

  const afterCursor = cursorCache[currentPage - 1] || null
  const afterCursorSearch = cursorCacheSearch[currentPage - 1] || null

  const { data } = await getArticlesByPageAction({
    afterCursor,
    postPerPage: POSTS_PER_PAGE,
  })

  let searchResult = null
  if (query) {
    searchResult = await getSearchResult({
      afterCursorSearch,
      postPerPage: POSTS_PER_PAGE,
      query,
    })

    if (searchResult.data?.posts?.pageInfo.endCursor) {
      cursorCacheSearch[currentPage] =
        searchResult.data?.posts?.pageInfo.endCursor
    }
  }

  console.log({ searchResult, cursorCacheSearch })

  // Guardamos el cursor de esta página para futuras paginaciones
  if (data?.posts?.pageInfo.endCursor) {
    cursorCache[currentPage] = data.posts.pageInfo.endCursor
  }

  return (
    <div className=''>
      <section className='bg-white px-1 pb-4 pt-[calc(var(--header-height)+1rem)] shadow-b-section'>
        <Container classNames='post my-10'>
          <div className='mx-auto mb-12 w-[min(100%,1440px)] max-[1440px]:px-4'>
            <SearchBar placeholder='Buscar artículos...' />
          </div>
          {query !== '' ? (
            <div>
              <ul>
                {searchResult?.data?.posts?.edges.map((edge, index) => (
                  <Article
                    srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
                    key={edge.node.id}
                    i={index}
                    slug={edge.node.slug || ''}
                    title={edge.node.title || ''}
                    excerpt={edge.node.excerpt || ''}
                    createdAt={edge.node.date!}
                    subtitle={edge.node.headings?.subtitle || ''}
                  />
                ))}
              </ul>
              <div className='xs:mt-0 mt-2 inline-flex space-x-2'>
                <Link
                  href={`/blog/${currentPage - 1}/?query=${query}`}
                  className={cn(
                    `group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 font-heading text-base font-medium text-primary transition-all duration-700 ease-[var(--ease)] hover:text-white`,
                    {
                      'pointer-events-none border-text/20 text-dark/20':
                        currentPage <= 1,
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
            </div>
          ) : (
            <>
              <ul className='grid-blog'>
                {/* <ListOfArticles
                data={data}
                query={query}
                afterCursor={afterCursor}
                postPerPage={POSTS_PER_PAGE}
              /> */}
                {data?.posts?.edges.map((edge, index) => (
                  <Article
                    srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
                    key={edge.node.id}
                    i={index}
                    slug={edge.node.slug || ''}
                    title={edge.node.title || ''}
                    excerpt={edge.node.excerpt || ''}
                    createdAt={edge.node.date!}
                    subtitle={edge.node.headings?.subtitle || ''}
                  />
                ))}
              </ul>
              <PaginationBlog
                totalCount={totalArticles!}
                postsPerPage={POSTS_PER_PAGE}
                currentPage={currentPage}
              />
            </>
          )}
        </Container>
      </section>
    </div>
  )
}
