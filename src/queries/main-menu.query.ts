import { graphql } from '@/gql'

export const getMainMenuQuery = graphql(`
  query getMainMenu {
    menuItems(where: { location: PRIMARY }) {
      edges {
        node {
          id
          path
          url
          label
        }
      }
    }
  }
`)
