import { BASE_URL } from '@/config'
import { errorMessages, ErrorType } from '@/errors'
import request from 'graphql-request'

export const fetchData = async <T>({
  errorType,
  query,
  variables = {},
}: {
  errorType: ErrorType
  query: any
  variables?: any
}): Promise<{ data: T | null; error: string | null }> => {
  const url = `${BASE_URL}/graphql`
  try {
    const data = await request<T>({ url, document: query, variables })
    return { data, error: null }
  } catch (error) {
    console.error({ error })

    return { data: null, error: errorMessages[errorType] }
  }
}
