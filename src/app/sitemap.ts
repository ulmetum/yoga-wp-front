import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getTotalArticlesCounttAction } from '@/actions/articles/get-total-articles-count.action'
import { FRONTEND_BASE_URL } from '@/config'
import dayjs from 'dayjs'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: totalArticlesCount } = await getTotalArticlesCounttAction({
    typeError: 'ErrorArticles',
  })

  const { data, error } = await getAllArticlesAction({
    allArticles: parseInt(totalArticlesCount!),
  })

  if (error) return []

  const articlesUrls =
    data?.posts?.nodes.map((article) => ({
      url: `${FRONTEND_BASE_URL}/${article.slug}`,
      lastModified: dayjs(article.date).isValid()
        ? dayjs(article.date).format('YYYY-MM-DD')
        : dayjs().format('YYYY-MM-DD'),
    })) ?? []

  return [
    {
      url: `${FRONTEND_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${FRONTEND_BASE_URL}/contacto`,
      lastModified: new Date(),
    },
    {
      url: `${FRONTEND_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${FRONTEND_BASE_URL}/sobre-mi`,
      lastModified: new Date(),
    },
    {
      url: `${FRONTEND_BASE_URL}/servicios`,
      lastModified: new Date(),
    },
    ...articlesUrls,
  ]
}
