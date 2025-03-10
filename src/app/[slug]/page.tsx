import { getArticlesBySlugAction } from '@/actions/articles/get-articles-by-slug.action'
import { Container } from '@/components/Container'
import { CustomError } from '@/components/CustomError'
import { HeroArticle } from '@/components/slug/HeroArticle'

interface Props {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: Props) => {
  const { slug } = await params

  const { data, error } = await getArticlesBySlugAction({ slug })

  if (error) return <CustomError error={error} />

  return (
    <div>
      <section className='section-top sticky left-0 top-0 flex min-h-screen w-full items-center justify-center py-[calc(var(--header-height)+1rem)] pb-36 xl:px-6'>
        <Container classNames='relative flex h-full flex-col justify-center items-center gap-2'>
          {/* <BreadCrumbsArticle title={titleFormatted} /> */}
          <HeroArticle
            author={data?.post.author?.node.name ?? ''}
            title={data?.post.title ?? ''}
            createdAt={data?.post.date ?? ''}
            subtitle={data?.post.headings.subtitle ?? ''}
            image={data?.post.featuredImage.node.sourceUrl ?? ''}
          />
        </Container>
      </section>
      <section className='post relative bg-white px-2 py-20 shadow-y-section sm:px-6'>
        <Container>
          <article>
            <div dangerouslySetInnerHTML={{ __html: data?.post.content! }} />
          </article>
        </Container>
      </section>
    </div>
  )
}
export default page
