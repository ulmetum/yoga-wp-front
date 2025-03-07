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

export const getArticlesByPageQuery = graphql(`
  query GetArticlesByPage($first: Int!, $after: String) {
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
export const getSearchResultQuery = graphql(`
  query GetSearchResult($first: Int!, $after: String, $query: String) {
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
