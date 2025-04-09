'use server'

import { BACKEND_BASE_URL } from '@/config'
import { errorMessages, ErrorType } from '@/errors'

export const getTotalArticlesCounttAction = async ({
  typeError,
}: {
  typeError: ErrorType
}) => {
  try {
    const response = await fetch(
      `${BACKEND_BASE_URL}/wp-json/wp/v2/posts?per_page=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const totalArticles = response.headers.get('X-WP-Total')

    return { data: totalArticles, error: null }
  } catch (error) {
    // console.log({ error })
    return { data: null, error: errorMessages[typeError] }
  }
}
