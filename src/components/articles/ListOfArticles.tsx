import { getSearchResult } from '@/actions/articles/getSearchResult.action'
import { Article } from '@/components/articles/Article'
import { GetArticlesByPageQuery } from '@/gql/graphql'

interface Props {
  data: GetArticlesByPageQuery | null
  query: string
  postPerPage: number
  afterCursor: string | null
}
export const ListOfArticles = async ({
  data,
  query,
  postPerPage,
  afterCursor,
}: Props) => {
  let searchResult = null
  if (query) {
    searchResult = await getSearchResult({ afterCursor, postPerPage, query })
  }

  return (
    <>
      {query.length > 0
        ? searchResult?.data?.posts?.edges.map((edge, index) => (
            <Article
              srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
              key={edge.node.id}
              i={index}
              slug={edge.node.slug || ''}
              title={edge.node.title || ''}
              excerpt={edge.node.excerpt || ''}
              createdAt={edge.node.date!}
              subtitle={edge.node.headings?.subtitle || ''}
            />
          ))
        : data?.posts?.edges.map((edge, index) => (
            <Article
              srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
              key={edge.node.id}
              i={index}
              slug={edge.node.slug || ''}
              title={edge.node.title || ''}
              excerpt={edge.node.excerpt || ''}
              createdAt={edge.node.date!}
              subtitle={edge.node.headings?.subtitle || ''}
            />
          ))}
    </>
  )
}
