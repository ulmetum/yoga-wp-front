import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { getTotalArticlestAction } from '@/actions/articles/get-total-articles.action'
import { PaginationBlog } from '@/components/articles/PaginationBlog'
import { Article } from '@/components/articles/Article'
import { Container } from '@/components/Container'
import { SearchBar } from '@/components/articles/SearchBar'
import { getSearchResult } from '@/actions/articles/getSearchResult.action'
import { CustomError } from '@/components/CustomError'
import { SearchResult } from '@/interfaces/articles.interface'
import { ArticlesSearch } from '@/components/articles/ArticlesSearch'

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

  const { totalArticles, error } = await getTotalArticlestAction({
    typeError: 'ErrorArticles',
  })

  if (error) {
    return (
      <CustomError
        classNames='min-h-screen'
        error={error}
      />
    )
  }

  const totalPages = Math.ceil(Number(totalArticles) / POSTS_PER_PAGE)

  let currentPage = Number(page)

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    currentPage = 1

  const afterCursor = cursorCache[currentPage - 1] || null
  const afterCursorSearch = cursorCacheSearch[currentPage - 1] || null

  const { data, error: errorArticleByPage } = await getArticlesByPageAction({
    afterCursor,
    postPerPage: POSTS_PER_PAGE,
  })

  if (errorArticleByPage) {
    return (
      <CustomError
        classNames='min-h-screen'
        error={errorArticleByPage}
      />
    )
  }

  let searchResult: SearchResult | null = null

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

  // Guardamos el cursor de esta página para futuras paginaciones
  if (data?.posts?.pageInfo.endCursor) {
    cursorCache[currentPage] = data.posts.pageInfo.endCursor
  }

  return (
    <section className=' bg-white px-1 pb-4 pt-[calc(var(--header-height)+1rem)] shadow-b-section'>
      <Container classNames='post my-10 min-h-[calc(100dvh-var(--header-height)*3)] flex flex-col'>
        <div className='mx-auto mb-12 w-[min(100%,1440px)] max-[1440px]:px-4'>
          <SearchBar placeholder='Buscar artículos...' />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center'>
          {query !== '' ? (
            <ArticlesSearch
              currentPage={currentPage}
              query={query}
              searchResult={searchResult}
            />
          ) : (
            <>
              <ul className='grid-blog'>
                {data?.posts?.edges.map((edge, index) => (
                  <Article
                    srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
                    key={edge.node.id}
                    i={index}
                    slug={edge.node.slug || ''}
                    title={edge.node.title || ''}
                    createdAt={edge.node.date!}
                    subtitle={edge.node.headings?.subtitle || ''}
                    type='blog'
                  />
                ))}
              </ul>
              <PaginationBlog
                totalCount={parseInt(totalArticles!)}
                postsPerPage={POSTS_PER_PAGE}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
