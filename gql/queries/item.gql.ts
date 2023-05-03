import { graphql } from '../generated/gql'

export const GetItemQuery = graphql(`
  query GetItem($accountId: String!, $itemId: String!) {
    item(accountId: $accountId, itemId: $itemId) {
      id
      title
      description
      valuationAmount
      valuationCurrency
      saleId
    }
  }
`)

export const GetItemsQuery = graphql(`
  query GetItems(
    $accountId: String!
    $first: Int
    $after: String
    $itemsFilter: ItemsFilter!
  ) {
    items(
      accountId: $accountId
      first: $first
      after: $after
      itemsFilter: $itemsFilter
    ) {
      edges {
        cursor
        node {
          id
          title
          description
          valuationAmount
          valuationCurrency
          saleId
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`)
