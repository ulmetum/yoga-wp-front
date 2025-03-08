import { SearchResult } from '@/interfaces/articles.interface'
import { PaginationBlogSearch } from './PaginationBlogSearch'
import { Article } from './Article'

interface Props {
  currentPage: number
  query: string
  searchResult: SearchResult | null
}

export const ArticlesSearch = ({ currentPage, query, searchResult }: Props) => {
  return (
    <>
      <h1 className='text-primary my-12 text-4xl text-center xl:text-5xl'>
        Su búsqueda ha arrojado los siguientes resultados...
      </h1>
      <ul className='articles-search'>
        {searchResult?.data?.posts?.edges.map((edge, index) => (
          <Article
            type='search'
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
      </ul>
      <PaginationBlogSearch
        currentPage={currentPage}
        query={query}
        searchResult={searchResult}
      />
    </>
  )
}
