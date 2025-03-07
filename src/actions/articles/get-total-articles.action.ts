'use server'

import { BASE_URL } from '@/config'

export const getTotalArticlestAction = async () => {
  try {
    const response = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?per_page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return {
        error: 'Hubo un error al recuperar el número total de entradas',
        totalArticles: null,
      }
    }

    let totalArticles = response.headers.get('X-WP-Total')

    return {
      totalArticles: totalArticles ? Number(totalArticles) : null,
      error: null,
    }
  } catch (error) {
    return {
      error: 'Hubo un error al recuperar el número total de entradas',
      totalArticles: null,
    }
  }
}
