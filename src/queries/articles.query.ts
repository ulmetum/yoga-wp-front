import { graphql } from '@/gql'

export const getAllArticlesQuery = graphql(`
  query getAllArticles {
    posts(first: 5) {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`)
export const getArticleBySlugQuery = ({ slug }: { slug: string }) => `
  query getArticleBySlug {
    post(idType: SLUG, id: "${slug}") {
      title
      author {
      node {
          name
        }
      }
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      headings {
        subtitle
      }
      content(format: RENDERED)
      date
    }
  }
`

export const getArticlesByPageQuery = graphql(`
  query getArticlesByPage($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      edges {
        node {
          id
          title
          slug
          date
          headings {
            subtitle
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)
export const getSearchResultQuery = graphql(`
  query getSearchResult($first: Int!, $after: String, $query: String) {
    posts(
      first: $first
      after: $after
      where: { search: $query, orderby: { field: DATE, order: DESC } }
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt
          date
          headings {
            subtitle
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)
