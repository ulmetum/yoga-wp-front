import { getArticlesBySlugAction } from '@/actions/articles/get-articles-by-slug.action'
import { getPrevAndNextArticlesAction } from '@/actions/articles/get-prev-and-next-articles.action'
import { Container } from '@/components/Container'
import { CustomError } from '@/components/CustomError'
import { HeroArticle } from '@/components/slug/HeroArticle'
import { PaginationArticle } from '@/components/slug/PaginationArticle'

interface Props {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: Props) => {
  const { slug } = await params

  const { data: articlesBySlug, error } = await getArticlesBySlugAction({
    slug,
  })

  if (error) return <CustomError error={error} />

  const idArticle = articlesBySlug?.post.id

  if (!idArticle) return <CustomError error={'No article found'} />

  const { data: nextPrevArticles, error: errorPagination } =
    await getPrevAndNextArticlesAction({
      idArticle,
    })

  if (errorPagination) return <CustomError error={errorPagination} />

  const nextArticle = nextPrevArticles?.nextArticle
  const prevArticle = nextPrevArticles?.prevArticle

  return (
    <div>
      <section className='section-top sticky left-0 xl:top-0 flex xl:min-h-screen -top-[10dvh] min-h-[110dvh] w-full items-center justify-center py-[calc(var(--main-header-height)+1rem)] xl:px-6'>
        <Container classNames='relative flex flex-col justify-center items-center gap-2'>
          {/* <BreadCrumbsArticle title={titleFormatted} /> */}
          <HeroArticle
            author={articlesBySlug?.post.author?.node.name ?? ''}
            title={articlesBySlug?.post.title ?? ''}
            createdAt={articlesBySlug?.post.date ?? ''}
            subtitle={articlesBySlug?.post.headings.subtitle ?? ''}
            image={articlesBySlug?.post.featuredImage.node.sourceUrl ?? ''}
          />
        </Container>
      </section>
      <section className='post relative bg-white px-2 py-20 shadow-y-section sm:px-6'>
        <Container>
          <article>
            <div
              dangerouslySetInnerHTML={{
                __html: articlesBySlug?.post.content!,
              }}
            />
          </article>
          <PaginationArticle
            nextArticle={nextArticle}
            prevArticle={prevArticle}
          />
        </Container>
      </section>
    </div>
  )
}
export default page
