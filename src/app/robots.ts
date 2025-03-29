import type { MetadataRoute } from 'next'
import { FRONTEND_BASE_URL } from '@/config'

export default function robots(): MetadataRoute.Robots {
  // console.log({ FRONTEND_BASE_URL })
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${FRONTEND_BASE_URL}/sitemap.xml`,
  }
}
