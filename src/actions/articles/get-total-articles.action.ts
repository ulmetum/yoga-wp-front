'use server'

import { BASE_URL } from '@/config'
import { ActionError, errorMessages, ErrorType } from '@/errors'

export const getTotalArticlestAction = async ({
  typeError,
}: {
  typeError: ErrorType
}) => {
  try {
    const response = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?per_page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    let totalArticles = response.headers.get('X-WP-Total')

    return { totalArticles }
  } catch (error) {
    return { error: errorMessages[typeError] }
  }
}
