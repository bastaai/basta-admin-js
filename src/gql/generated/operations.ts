export const CREATE_ACCOUNT = `mutation CREATE_ACCOUNT($input: CreateAccountInput!) {
  createAccount(input: $input) {
    id
    name
    email
    created
    modified
    createdByUserID
    modifiedByUserID
    handle
    description
    imageUrl
    links {
      type
      url
    }
  }
}`;

export const BID_ON_BEHALF = `mutation BID_ON_BEHALF($accountID: String!, $input: BidOnBehalfInput!) {
  bidOnBehalf(accountId: $accountID, input: $input) {
    amount
    maxAmount
    userId
    date
    bidStatus
  }
}`;

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
}`;

export const ADD_ITEM_TO_SALE = `mutation ADD_ITEM_TO_SALE($accountId: String!, $input: AddItemToSaleInput!) {
  addItemToSale(accountId: $accountId, input: $input) {
    id
    title
    totalBids
    description
    currentBid
    leaderId
    saleId
    bids {
      bidId
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
    }
    reserve
    startingBid
    status
    lowEstimate
    highEstimate
    itemNumber
    dates {
      closingStart
      closingEnd
    }
    allowedBidTypes
    images {
      id
      url
      order
    }
  }
}`;

export const CREATE_ITEM_FOR_SALE = `mutation CREATE_ITEM_FOR_SALE($accountId: String!, $input: SaleItemInput!) {
  createItemForSale(accountId: $accountId, input: $input) {
    id
    title
    totalBids
    description
    currentBid
    leaderId
    saleId
    bids {
      bidId
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
    }
    reserve
    startingBid
    status
    lowEstimate
    highEstimate
    itemNumber
    dates {
      closingStart
      closingEnd
    }
    allowedBidTypes
    images {
      id
      url
      order
    }
  }
}`;

export const CREATE_ITEM = `mutation CREATE_ITEM($accountId: String!, $input: CreateItemInput!) {
  createItem(accountId: $accountId, input: $input) {
    id
    saleId
    images {
      id
      url
      order
    }
    description
    title
    valuationAmount
    valuationCurrency
  }
}`;

export const REMOVE_ITEM_FROM_SALE = `mutation REMOVE_ITEM_FROM_SALE($accountId: String!, $input: RemoveSaleItemInput!) {
  removeItemFromSale(accountId: $accountId, input: $input) {
    id
    accountId
    title
    description
    currency
    status
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
    sequenceNumber
    closingMethod
    closingTimeCountdown
    images {
      id
      url
      order
    }
  }
}`;

export const UPDATE_ITEM_FOR_SALE = `mutation UPDATE_ITEM_FOR_SALE($accountId: String!, $itemId: String!, $input: UpdateSaleItemInput!) {
  updateItemForSale(accountId: $accountId, itemId: $itemId, input: $input) {
    id
    title
    totalBids
    description
    currentBid
    leaderId
    saleId
    bids {
      bidId
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
    }
    reserve
    startingBid
    status
    lowEstimate
    highEstimate
    itemNumber
    dates {
      closingStart
      closingEnd
    }
    allowedBidTypes
    images {
      id
      url
      order
    }
  }
}`;

export const UPDATE_ITEM = `mutation UPDATE_ITEM($accountId: String!, $itemId: String!, $input: UpdateItemInput!) {
  updateItem(accountId: $accountId, itemId: $itemId, input: $input) {
    id
    description
    title
    valuationAmount
    valuationCurrency
    saleId
    images {
      id
      url
      order
    }
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

export const GET_ALL_ITEMS = `query GET_ALL_ITEMS($accountId: String!, $itemsFilter: ItemsFilter!, $first: Int, $after: String) {
  items(
    accountId: $accountId
    itemsFilter: $itemsFilter
    first: $first
    after: $after
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
        images {
          id
          url
          order
        }
      }
    }
  }
}`;

export const GET_ITEM = `query GET_ITEM($accountId: String!, $itemId: String!) {
  item(accountId: $accountId, itemId: $itemId) {
    description
    title
    valuationAmount
    valuationCurrency
  }
}`;

export const GET_ALL_SALES = `query GET_ALL_SALES($accountId: String!, $first: Int = 20, $after: String, $filter: SaleFilter) {
  sales(accountId: $accountId, first: $first, after: $after, filter: $filter) {
    edges {
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
        }
      }
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
    }
  }
}`;
