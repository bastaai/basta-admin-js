export const CREATE_ACCOUNT = `mutation CREATE_ACCOUNT($input: CreateAccountInput!) {
  createAccount(input: $input) {
    id
    name
    email
    created
    modified
    handle
    description
    imageUrl
    platformKey
    links {
      type
      url
    }
  }
}`;

export const CREATE_API_TOKEN = `mutation CREATE_API_TOKEN($accountId: String!, $input: ApiTokenInput!) {
  createApiToken(accountId: $accountId, input: $input) {
    id
    name
    roles
    generatedApiKey
  }
}`;

export const CREATE_USER_TOKEN = `mutation CREATE_USER_TOKEN($accountId: String!, $input: UserTokenInput!) {
  createUserTokenV2(accountId: $accountId, input: $input) {
    token
    expirationDate
  }
}`;

export const REVOKE_API_TOKEN = `mutation REVOKE_API_TOKEN($accountId: String!, $input: RevokeApiTokenInput!) {
  revokeApiToken(accountId: $accountId, input: $input)
}`;

export const BID_ON_BEHALF = `mutation BID_ON_BEHALF($accountId: String!, $input: BidOnBehalfInput!) {
  bidOnBehalf(accountId: $accountId, input: $input) {
    bidId
    amount
    maxAmount
    userId
    date
    bidStatus
    bidSequenceNumber
  }
}`;

export const BID_ON_ITEM = `mutation BID_ON_ITEM($accountId: String!, $input: BidOnItemInput!) {
  bidOnItemV2(accountId: $accountId, input: $input) {
    __typename
    ... on BidPlacedSuccess {
      bidId
      bidStatus
      bidType
      date
      amount
      maxAmount
    }
    ... on BidPlacedError {
      errorCode
      error
    }
  }
}`;

export const CANCEL_LATEST_BID_ON_ITEM = `mutation CANCEL_LATEST_BID_ON_ITEM($accountId: String!, $input: CancelLatestBidOnItemInput!) {
  cancelLatestBidOnItem(accountId: $accountId, input: $input) {
    removedBids {
      bidId
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
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
    items {
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
      }
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
    participants {
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
      }
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
    images {
      __typename
      id
      url
      order
    }
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
          images {
            __typename
            id
            url
            order
          }
          bids {
            __typename
            bidId
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
        __typename
        highRange
        lowRange
        step
      }
    }
    dates {
      __typename
      closingDate
      openDate
    }
    participants {
      __typename
      totalCount
      edges {
        __typename
        cursor
        node {
          __typename
          userId
        }
      }
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
}`;

export const PUBLISH_SALE = `mutation PUBLISH_SALE($accountId: String!, $input: PublishSaleInput!) {
  publishSale(accountId: $accountId, input: $input) {
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
    images {
      __typename
      id
      url
      order
    }
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
          images {
            __typename
            id
            url
            order
          }
          bids {
            __typename
            bidId
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
        __typename
        highRange
        lowRange
        step
      }
    }
    dates {
      __typename
      closingDate
      openDate
    }
    participants {
      __typename
      totalCount
      edges {
        __typename
        cursor
        node {
          __typename
          userId
        }
      }
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
}`;

export const ADD_HOOK_SUBSCRIPTION = `mutation ADD_HOOK_SUBSCRIPTION($accountId: String!, $input: ActionHookSubscriptionInput!) {
  addActionHookSubscription(accountId: $accountId, input: $input) {
    accountId
    action
    url
    headers {
      key
      value
    }
  }
}`;

export const DELETE_HOOK_SUBSCRIPTION = `mutation DELETE_HOOK_SUBSCRIPTION($accountId: String!, $input: DeleteActionHookSubscriptionInput!) {
  deleteActionHookSubscription(accountId: $accountId, input: $input)
}`;

export const TEST_HOOK_SUBSCRIPTION = `mutation TEST_HOOK_SUBSCRIPTION($accountId: String!, $input: ActionHookSubscriptionInput!) {
  testActionHook(accountId: $accountId, input: $input) {
    requestHeaders {
      key
      value
    }
    requestPayload
    requestMethod
    responseHeaders {
      key
      value
    }
    statusCode
  }
}`;

export const UPDATE_HOOK_SUBSCRIPTION = `mutation UPDATE_HOOK_SUBSCRIPTION($accountId: String!, $input: UpdateActionHookSubscriptionInput!) {
  updateActionHookSubscription(accountId: $accountId, input: $input) {
    accountId
    action
    url
    headers {
      key
      value
    }
  }
}`;

export const GET_ACCOUNT = `query GET_ACCOUNT($accountId: String!) {
  account(accountId: $accountId) {
    id
    name
    email
    created
    modified
    handle
    description
    imageUrl
    links {
      url
      type
    }
    paymentDetails {
      paymentProviderAccountId
      status
    }
  }
}`;

export const GET_API_KEYS = `query GET_API_KEYS($accountId: String!, $first: Int = 10, $after: String) {
  apiTokens(accountId: $accountId, first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        name
        accountId
        roles
      }
    }
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
    id
    description
    title
    valuationAmount
    valuationCurrency
    images {
      __typename
      id
      url
      order
    }
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
          pageInfo {
            __typename
            startCursor
            endCursor
            hasNextPage
          }
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
        participants {
          pageInfo {
            __typename
            startCursor
            endCursor
            hasNextPage
          }
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

export const GET_ALL_LOGS = `query GET_ALL_LOGS($accountId: String!, $first: Int = 500, $after: String, $filter: ActionHookFilter) {
  actionHookLogs(accountId: $accountId, after: $after, filter: $filter) {
    edges {
      cursor
      node {
        id
        accountId
        action
        url
        headers {
          key
          value
        }
        requestPayload
        idempotencyKey
        status
        error
        retries
        createdAt
        executedAt
      }
    }
  }
}`;

export const GET_HOOK_SUBSCRIPTION = `query GET_HOOK_SUBSCRIPTION($accountId: String!) {
  actionHookSubscriptions(accountId: $accountId) {
    accountId
    action
    url
    headers {
      key
      value
    }
  }
}`;
