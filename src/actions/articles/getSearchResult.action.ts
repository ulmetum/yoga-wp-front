'use server'

import type { GetSearchResultQuery } from '@/gql/graphql'
import { getSearchResultQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const inputSchema = z.object({
  postPerPage: z.number(),
  afterCursorSearch: z.string().nullable(),
  query: z.string(),
})

type PageParams = z.infer<typeof inputSchema>

export async function getSearchResult({
  postPerPage,
  afterCursorSearch,
  query,
}: PageParams) {
  const pageParamsParsed = inputSchema.safeParse({
    postPerPage,
    afterCursorSearch,
    query,
  })

  if (!pageParamsParsed.success) {
    return { error: 'Page params incorrecto', data: null }
  }

  const { data, error } = await fetchData<GetSearchResultQuery>({
    errorType: 'ErrorArticles',
    query: getSearchResultQuery,
    variables: { first: postPerPage, after: afterCursorSearch, query },
  })

  return { data, error }
}
