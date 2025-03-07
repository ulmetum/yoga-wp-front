'use server'

import { GetArticlesByPageQuery } from '@/gql/graphql'
import { getArticlesByPageQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const inputSchema = z.object({
  postPerPage: z.number(),
  afterCursor: z.string().nullable(),
})

type PageParams = z.infer<typeof inputSchema>

export async function getArticlesByPageAction({
  postPerPage,
  afterCursor,
}: PageParams) {
  const pageParamsParsed = inputSchema.safeParse({ postPerPage, afterCursor })

  if (!pageParamsParsed.success) {
    return { error: 'Page params incorrecto', data: null }
  }

  const { data, error } = await fetchData<GetArticlesByPageQuery>({
    errorType: 'ErrorArticles',
    query: getArticlesByPageQuery,
    variables: { first: postPerPage, after: afterCursor },
  })

  return { data, error }
}
