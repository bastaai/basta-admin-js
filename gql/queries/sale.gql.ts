import { graphql } from '../generated/gql'

export const SalesAggregate = graphql(`
  query SalesAggregate($accountId: String!) {
    salesAggregate(accountId: $accountId) {
      open
      closing
      closed
      published
      unpublished
    }
  }
`)

export const GetSalesQuery = graphql(`
  query GetSales(
    $accountId: String!
    $first: Int
    $after: String
    $filter: SaleFilter
    $take: Int
    $cursor: String
    $direction: PaginationDirection
  ) {
    sales(
      accountId: $accountId
      first: $first
      after: $after
      filter: $filter
    ) {
      edges {
        cursor
        node {
          id
          title
          description
          currency
          status
          closingMethod
          dates {
            closingDate
            openDate
          }
          items {
            edges {
              node {
                id
                title
                description
              }
            }
          }
          closingTimeCountdown
          participants(take: $take, cursor: $cursor, direction: $direction) {
            edges {
              cursor
              node {
                userId
              }
            }
            totalCount
            pageInfo {
              startCursor
              endCursor
              hasNextPage
            }
          }
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

export const GetSaleQuery = graphql(`
  query GetSale(
    $accountId: String!
    $id: ID!
    $take: Int
    $cursor: String
    $direction: PaginationDirection
  ) {
    sale(accountId: $accountId, id: $id) {
      id
      accountId
      title
      description
      currency
      status
      closingMethod
      items {
        edges {
          cursor
          node {
            id
            title
            totalBids
            description
            currentBid
            leaderId
            saleId
            reserve
            startingBid
            lowEstimate
            highEstimate
            itemNumber
            bids {
              bidId
              amount
              userId
              date
              bidStatus
              maxAmount
              bidSequenceNumber
            }
            dates {
              closingStart
              closingEnd
            }
            allowedBidTypes
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
      incrementTable {
        rules {
          highRange
          lowRange
          step
        }
      }
      dates {
        closingDate
        openDate
      }
      closingTimeCountdown
      participants(take: $take, cursor: $cursor, direction: $direction) {
        edges {
          cursor
          node {
            userId
          }
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`)
