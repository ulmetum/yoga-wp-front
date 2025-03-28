import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { getTotalArticlesCounttAction } from '@/actions/articles/get-total-articles-count.action'
import { PaginationBlog } from '@/components/articles/PaginationBlog'
import { Article } from '@/components/articles/Article'
import { Container } from '@/components/Container'
import { SearchBar } from '@/components/articles/SearchBar'
import { getSearchResult } from '@/actions/articles/get-search-result.action'
import { CustomError } from '@/components/CustomError'
import { SearchResult } from '@/interfaces/articles.interface'
import { ArticlesSearch } from '@/components/articles/ArticlesSearch'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ page: string }>
  searchParams: Promise<{ query: string }>
}

const POSTS_PER_PAGE = 4

const cursorCache: Record<number, string | null> = {}
const cursorCacheSearch: Record<number, string | null> = {}

export async function generateStaticParams() {
  const { data: totalArticlesCount } = await getTotalArticlesCounttAction({
    typeError: 'ErrorArticles',
  })

  const totalPages = Math.ceil(Number(totalArticlesCount) / POSTS_PER_PAGE)

  const staticPagesBlog = Array.from({ length: totalPages }, (_, i) => i + 1)

  return staticPagesBlog.map((page) => ({
    page: [`${page}`],
  }))
  // return [
  //   { page: ["1"] },
  //   { page: ["2"] },
  // ]
}

export const metadata: Metadata = {
  title:
    'Blog | La Isla del Yoga - Consejos y Artículos sobre Yoga y Bienestar',
  description:
    'Explora el blog de La Isla del Yoga. Lee artículos, consejos y reflexiones sobre yoga, bienestar físico y mental, y cómo integrar el yoga en tu vida.',
  openGraph: {
    title:
      'Blog | La Isla del Yoga - Consejos y Artículos sobre Yoga y Bienestar',
    description:
      'Explora el blog de La Isla del Yoga. Lee artículos, consejos y reflexiones sobre yoga, bienestar físico y mental, y cómo integrar el yoga en tu vida.',
    url: 'https://www.laisladelyoga.com/blog',
    images: [
      {
        url: '/images/laisladelyoga-blog.webp', // Ruta de la imagen para Open Graph
        width: 1200,
        height: 630,
        alt: 'Blog de La Isla del Yoga - Artículos sobre Yoga y Bienestar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Tipo de tarjeta para Twitter
    title:
      'Blog | La Isla del Yoga - Consejos y Artículos sobre Yoga y Bienestar',
    description:
      'Explora el blog de La Isla del Yoga. Lee artículos, consejos y reflexiones sobre yoga, bienestar físico y mental, y cómo integrar el yoga en tu vida.',
    images: [
      {
        url: '/images/laisladelyoga-blog.webp', // Ruta de la imagen para Twitter
        width: 1200,
        height: 630,
        alt: 'Blog de La Isla del Yoga - Artículos sobre Yoga y Bienestar',
      },
    ],
  },
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { page } = await params
  const { query = '' } = await searchParams

  const { data: totalArticlesCount, error } =
    await getTotalArticlesCounttAction({
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

  const totalPages = Math.ceil(Number(totalArticlesCount) / POSTS_PER_PAGE)

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
    <section className=' bg-white px-1 pb-4 pt-[calc(var(--main-header-height)+1rem)] shadow-b-section'>
      <Container classNames='post my-10 min-h-[calc(100dvh-var(--main-header-height)*3)] flex flex-col'>
        <div className='mx-auto mb-12 w-[min(100%,1440px)] '>
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
                totalArticlesCount={parseInt(totalArticlesCount!)}
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
