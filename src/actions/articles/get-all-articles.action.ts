'use server'

import { getAllArticlesQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'

export async function getAllArticlesAction() {
  const response = await fetchData({
    errorType: 'ErrorArticles',
    query: getAllArticlesQuery,
  })
  return { response }
}
