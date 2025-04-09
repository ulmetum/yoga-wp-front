import { SearchResult } from '@/interfaces/articles.interface'
import { PaginationBlogSearch } from './PaginationBlogSearch'
import { Article } from './Article'

interface Props {
  currentPage: number
  query: string
  searchResult: SearchResult | null
}

export const ArticlesSearch = ({ currentPage, query, searchResult }: Props) => {
  // console.log({ searchResult })
  const articles = searchResult?.data?.posts?.edges ?? []
  return (
    <>
      {articles.length === 0 ? (
        <div className='my-12 flex flex-col justify-center items-center'>
          <h1 className='text-primary mb-2 text-4xl  xl:text-5xl'>
            Lo siento pero no hay resultados que mostrar
          </h1>
          <p>
            Prueba con otros términos de búsqueda o explore nuestras secciones
          </p>
        </div>
      ) : (
        <h1 className='text-primary my-12 text-4xl text-center xl:text-5xl'>
          Tu búsqueda ha arrojado los siguientes resultados...
        </h1>
      )}
      <ul className='articles-search'>
        {articles.map((edge, index) => (
          <Article
            type='search'
            srcUrl={edge.node.featuredImage?.node.sourceUrl || ''}
            key={edge.node.id}
            i={index}
            slug={edge.node.slug || ''}
            title={edge.node.title || ''}
            createdAt={edge.node.date!}
            subtitle={edge.node.headings?.subtitle || ''}
          />
        ))}
      </ul>
      {articles.length > 0 && (
        <PaginationBlogSearch
          currentPage={currentPage}
          query={query}
          searchResult={searchResult}
        />
      )}
    </>
  )
}
