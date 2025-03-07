import { getArticlesBySlugAction } from '@/actions/articles/get-articles-by-slug.action'
import { CustomError } from '@/components/CustomError'

export default async function Home() {
  const { response } = await getArticlesBySlugAction({ slug: 'slug' })

  console.log({ response })
  if (response.error) {
    return <CustomError error={response.error} />
  }
  return (
    <div className='@container'>
      <h1 className='text-red-600 @7xl:text-blue-600'>Home page</h1>
    </div>
  )
}
