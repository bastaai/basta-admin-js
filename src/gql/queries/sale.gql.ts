import { graphql } from "../generated/gql";

export const GetSaleQuery = graphql(`
  query GetSale($accountId: String!, $id: ID!, $take: Int, $cursor: String, $direction:  PaginationDirection) {
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
            dates{
              closingStart,
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
      closingTimeCountdown,
      participants(take: $take, cursor: $cursor, direction: $direction){
        edges{
          cursor,
          node{
            userId
          }
        },
        totalCount,
        pageInfo{
          startCursor
          endCursor
          hasNextPage
        }
      }
    }
  }
`);
