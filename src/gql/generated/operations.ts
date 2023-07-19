export const BID_ON_ITEM = `mutation BID_ON_ITEM($accountId: String!, $input: BidOnItemInput!) {
  bidOnItemV2(accountId: $accountId, input: $input) {
    __typename
    ... on BidPlacedSuccess {
      amount
      maxAmount
      date
      bidStatus
      bidType
    }
    ... on BidPlacedError {
      errorCode
      error
    }
  }
}

mutation BID_ON_BEHALF($accountID: String!, $input: BidOnBehalfInput!) {
  bidOnBehalf(accountId: $accountID, input: $input) {
    amount
    maxAmount
    userId
    date
    bidStatus
  }
}`;

export const CREATE_SALE = `mutation CREATE_SALE($accountId: String!, $input: CreateSaleInput!) {
  createSale(accountId: $accountId, input: $input) {
    incrementTable {
      rules {
        highRange
        lowRange
        step
      }
    }
    closingMethod
    closingTimeCountdown
    currency
    dates {
      openDate
      closingDate
    }
    description
    title
  }
}`;

export const CREATE_USER_TOKEN = `mutation CREATE_USER_TOKEN($accountId: String!, $input: UserTokenInput!) {
  createUserTokenV2(accountId: $accountId, input: $input) {
    __typename
    token
    expirationDate
  }
}`;

export const GET_ALL_SALES = `query GET_ALL_SALES($accountId: String!, $first: Int = 20, $after: String, $filter: SaleFilter) {
  sales(accountId: $accountId, first: $first, after: $after, filter: $filter) {
    edges {
      cursor
      node {
        id
        accountId
        title
        description
        currency
        status
        closingMethod
        closingTimeCountdown
        sequenceNumber
        images {
          id
          url
          order
        }
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
              allowedBidTypes
              status
              images {
                id
                url
                order
              }
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
        participants {
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
    closingTimeCountdown
    sequenceNumber
    images {
      id
      url
      order
    }
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
          allowedBidTypes
          status
          images {
            id
            url
            order
          }
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
