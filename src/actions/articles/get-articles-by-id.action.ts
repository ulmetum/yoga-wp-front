'use server'

import { GetArticleByIdQuery, GetArticlesByPageQuery } from '@/gql/graphql'
import {
  getArticlesByIdQuery,
  getArticlesByPageQuery,
} from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const inputSchema = z.object({
  idArticle: z.string(),
})

type PageParams = z.infer<typeof inputSchema>

export async function getArticlesByIdAction({ idArticle }: PageParams) {
  const pageParamsParsed = inputSchema.safeParse({ idArticle })

  if (!pageParamsParsed.success) {
    return { error: 'Page params incorrecto', data: null }
  }

  const { data, error } = await fetchData<GetArticleByIdQuery>({
    errorType: 'ErrorArticles',
    query: getArticlesByIdQuery,
    variables: { id: idArticle },
  })

  return { data, error }
}
