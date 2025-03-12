'use server'

import { z } from 'zod'
import { getTotalArticlesCounttAction } from '@/actions/articles/get-total-articles-count.action'
import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getArticlesByIdAction } from '@/actions/articles/get-articles-by-id.action'
import { a } from 'motion/react-client'

const inputSchema = z.object({
  idArticle: z.string(),
})

type Params = z.infer<typeof inputSchema>

export async function getPrevAndNextArticlesAction({ idArticle }: Params) {
  const { data: totalCount, error: errorTotalCount } =
    await getTotalArticlesCounttAction({ typeError: 'ErrorTotalCount' })

  if (errorTotalCount) return { data: null, error: errorTotalCount }

  const { data: allArticles, error: allArticlesError } =
    await getAllArticlesAction({ allArticles: parseInt(totalCount!) })

  if (allArticlesError) return { data: null, error: allArticlesError }

  const idsArticles = allArticles?.posts?.nodes.map((article) => article.id)

  const currentIndexArticle = idsArticles?.indexOf(idArticle)!

  const nextIdArticle =
    idsArticles?.[
      currentIndexArticle === idsArticles.length - 1
        ? 0
        : currentIndexArticle + 1
    ]
  const prevIdArticle =
    idsArticles?.[
      currentIndexArticle === 0
        ? idsArticles.length - 1
        : currentIndexArticle - 1
    ]
  // console.log({ prevIdArticle, currentIndexArticle, nextIdArticle })

  const { data: prevArticle, error: prevArticleError } =
    await getArticlesByIdAction({
      idArticle: prevIdArticle!,
    })
  const { data: nextArticle, error: nextArticleError } =
    await getArticlesByIdAction({
      idArticle: nextIdArticle!,
    })

  return { data: { nextArticle, prevArticle }, error: null }
}
