'use server'

import { SEOBySlug } from '@/interfaces/article-seo-by-slug.interface'
import { getSeoBySlugQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'

export const getSeoBySlugAction = async ({ slug }: { slug: string }) => {
  const { data, error } = await fetchData<SEOBySlug>({
    errorType: 'ErrorArticle',
    query: getSeoBySlugQuery({ slug }),
    variables: { slug },
  })
  return { data, error }
}
