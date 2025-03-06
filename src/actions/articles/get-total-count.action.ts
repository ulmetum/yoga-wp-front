'use server'

import { BASE_URL } from '@/config'

export const getTotalCountAction = async () => {
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
        totalCount: null,
      }
    }

    let totalCount = response.headers.get('X-WP-Total')

    return {
      totalCount: totalCount ? Number(totalCount) : null,
      error: null,
    }
  } catch (error) {
    return {
      error: 'Hubo un error al recuperar el número total de entradas',
      totalCount: null,
    }
  }
}
