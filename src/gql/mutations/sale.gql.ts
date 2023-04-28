import { graphql } from "../generated/gql";


export const CreateSaleMutation = graphql(`
  mutation CreateSale($accountID: String!, $input: CreateSaleInput!) {
    createSale(accountId: $accountID, input: $input) {
      __typename
      id
      accountId
      title
      description
      currency
      status
      sequenceNumber
      closingMethod
      closingTimeCountdown
      items {
        __typename
        edges {
          __typename
          cursor
          node {
            __typename
            id
            title
            totalBids
            description
            currentBid
            leaderId
            saleId
            reserve
            startingBid
            status
            lowEstimate
            highEstimate
            itemNumber
            bids {
              __typename
              amount
              maxAmount
              userId
              date
              bidStatus
              bidSequenceNumber
            }
            dates {
              __typename
              closingStart
              closingEnd
            }
          }
        }
        pageInfo {
          __typename
          startCursor
          endCursor
          hasNextPage
        }
      }
      incrementTable {
        __typename
        rules {
          highRange
          lowRange
          step
          __typename
        }
      }
      dates {
        __typename
        openDate
        closingDate
      }
      participants {
        __typename
        edges {
          __typename
          cursor
          node {
            __typename
            userId
          }
        }
        totalCount
        pageInfo {
          __typename
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`)

