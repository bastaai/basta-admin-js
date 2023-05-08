export const BID_ON_ITEM = `mutation BID_ON_ITEM($accountId: String!, $input: BidOnItemInput!) {
  bidOnItemV2(accountId: $accountId, input: $input) {
    __typename
  }
}`;

export const CREATE_USER_TOKEN = `mutation CREATE_USER_TOKEN($accountId: String!, $input: UserTokenInput!) {
  createUserTokenV2(accountId: $accountId, input: $input) {
    __typename
    token
    expirationDate
  }
}`;

export const GET_SALE = `query GET_SALE($accountId: String!, $id: ID!, $take: Int, $cursor: String, $direction: PaginationDirection) {
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
}`;
