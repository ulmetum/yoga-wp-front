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
    posts(first: $first, after: $after) {
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
