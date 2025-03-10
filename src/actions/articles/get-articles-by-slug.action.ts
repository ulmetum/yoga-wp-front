'use server'

//TODO: LA QUERY ES INCORRECTA

import { getAllArticlesQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const inputSchema = z.object({
  slug: z.string(),
})

type Slug = z.infer<typeof inputSchema>

export async function getArticlesBySlugAction({ slug }: Slug) {
  const slugParsed = inputSchema.safeParse({ slug })

  if (!slugParsed.success) {
    // console.log(slugParsed.error)
    return { response: { error: 'Slug incorrecto', data: null } }
  }
  const { data, error } = await fetchData({
    errorType: 'ErrorArticles',
    query: getAllArticlesQuery,
    variables: { slug },
  })
  return { data, error }
}
