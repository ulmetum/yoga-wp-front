'use server'

import { GetAllArticlesQuery } from '@/gql/graphql'
import { getAllArticlesQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const inputSchema = z.object({
  allArticles: z.number(),
})

type Params = z.infer<typeof inputSchema>

export async function getAllArticlesAction({ allArticles }: Params) {
  const { data, error } = await fetchData<GetAllArticlesQuery>({
    errorType: 'ErrorArticles',
    query: getAllArticlesQuery,
    variables: { first: allArticles },
  })
  return { data, error }
}
