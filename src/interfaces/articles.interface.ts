import { GetSearchResultQuery } from '@/gql/graphql'

export type SearchResult = {
  data: GetSearchResultQuery | null
  error: string | null
}
