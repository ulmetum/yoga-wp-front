'use server'

import { GetMainMenuQuery } from '@/gql/graphql'
import { getMainMenuQuery } from '@/queries/main-menu.query'
import { fetchData } from '@/utils/fetchData'

export async function getMainMenuAction() {
  const { data, error } = await fetchData<GetMainMenuQuery>({
    errorType: 'ErrorMenu',
    query: getMainMenuQuery,
  })
  return { data, error }
}
