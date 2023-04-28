import { graphql } from '../generated/gql'

export const GetApiTokensQuery = graphql(`
  query GetApiTokens($accountId: String!, $first: Int, $after: String) {
    apiTokens(accountId: $accountId, first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          name
          roles
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`)
