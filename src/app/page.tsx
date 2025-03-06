import { getArticlesBySlugAction } from '@/actions/articles/get-articles-by-slug.action'
import { CustomError } from '@/components/CustomError'

export default async function Home() {
  const { response } = await getArticlesBySlugAction({ slug: 'slug' })

  console.log({ response })
  if (response.error) {
    return <CustomError error={response.error} />
  }
  return <div className='bg-green-700'>page</div>
}
