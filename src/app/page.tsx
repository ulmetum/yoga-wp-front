import { getArticlesBySlugAction } from '@/actions/articles/get-articles-by-slug.action'
import { CustomError } from '@/components/CustomError'

export default async function Home() {
  const { data, error } = await getArticlesBySlugAction({ slug: 'slug' })

  if (error) {
    return <CustomError error={error} />
  }
  return (
    <div className='group/edit'>
      <h1 className='group-hover/edit:text-red-700'>Home page</h1>
    </div>
  )
}
