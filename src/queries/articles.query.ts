import { graphql } from '@/gql'

export const getAllArticlesQuery = graphql(`
  query getAllArticles($first: Int) {
    posts(first: $first) {
      nodes {
        id
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`)

// El parámetro debe escribirse de esta forma especial en este caso porque id debe ser un string y no un ID de graphql
export const getArticleBySlugQuery = ({ slug }: { slug: string }) => `
  query getArticleBySlug {
    post(idType: SLUG, id: "${slug}") {
      title
      id
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

export const getSeoBySlugQuery = ({ slug }: { slug: string }) => `
  query getSeoBySlug {
     post (idType: SLUG, id: "${slug}") {
      seo {
        title
        description
        breadcrumbTitle
        openGraph {
          title
          description
          image {
            url
          }
        }
      }
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

export const getArticlesByIdQuery = graphql(`
  query getArticleById($id: ID!) {
    post(id: $id) {
      title
      id
      slug
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      headings {
        subtitle
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
