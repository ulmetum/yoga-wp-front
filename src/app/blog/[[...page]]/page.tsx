import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { getTotalCountAction } from '@/actions/articles/get-total-count.action'
import { Post } from '@/components/articles/Post'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { redirect } from 'next/navigation'
// import { ButtonsPagination } from '@/components/articles/ButtonsPagination'
// import { wrap } from '@/utils/wrap'

interface Props {
  params: Promise<{ page: string }>
}

const POSTS_PER_PAGE = 4

const cursorCache: Record<number, string | null> = {}

export default async function BlogPage({ params }: Props) {
  const { page } = await params
  const { totalCount } = await getTotalCountAction()
  // const pageSize = 30

  const totalPages = Math.ceil(Number(totalCount) / POSTS_PER_PAGE)

  let currentPage = Number(page)

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    currentPage = 1

  const afterCursor = cursorCache[currentPage - 1] || null

  const { data } = await getArticlesByPageAction({
    afterCursor,
    postPerPage: POSTS_PER_PAGE,
  })

  console.log({ data })

  // Guardamos el cursor de esta página para futuras paginaciones
  if (data?.posts?.pageInfo.endCursor) {
    cursorCache[currentPage] = data.posts.pageInfo.endCursor
  }

  return (
    <div className=''>
      <section className='bg-white px-1 pb-4 pt-[calc(var(--header-height)+1rem)] shadow-b-section'>
        <Container classNames='post my-10'>
          <div className='mx-auto mb-12 w-[min(100%,1440px)] max-[1440px]:px-4'>
            {/* <SearchBar id="search" className="pagefind-ui" uiOptions={{ showImages: true }} /> */}
          </div>
          <ul className='grid-blog'>
            {data?.posts?.edges.map((edge, index) => (
              <Post
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
        </Container>
      </section>
      {/* <div>
        {data?.posts?.edges.map((edge) => (
          <div key={edge.node.id}>{edge.node.title}</div>
        ))}
      </div> */}
      <div className='flex gap-2 mt-4'>
        {currentPage > 1 && (
          <Link
            href={`/blog/${currentPage - 1}`}
            className='p-2 border rounded'
          >
            Anterior
          </Link>
        )}
        <span>Página {currentPage}</span>
        {data?.posts?.pageInfo.hasNextPage && (
          <Link
            href={`/blog/${currentPage + 1}`}
            className='p-2 border rounded'
          >
            Siguiente
          </Link>
        )}
      </div>
    </div>
  )
}
