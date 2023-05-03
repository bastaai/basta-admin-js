import { graphql } from '../generated/gql'

export const BidOnBehalfMutation = graphql(`
  mutation BidOnBehalf($accountId: String!, $input: BidOnBehalfInput!) {
    bidOnBehalf(accountId: $accountId, input: $input) {
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
    }
  }
`)

export const CancelLatestBidMutation = graphql(`
  mutation CancelLatestBidOnItem(
    $accountId: String!
    $input: CancelLatestBidOnItemInput!
  ) {
    cancelLatestBidOnItem(accountId: $accountId, input: $input) {
      removedBids {
        amount
        maxAmount
        userId
        date
        bidStatus
        bidSequenceNumber
      }
    }
  }
`)

export const CloseSaleMutation = graphql(`
  mutation CloseSale($accountId: String!, $input: CloseSaleInput!) {
    closeSale(accountId: $accountId, input: $input) {
      id
      accountId
      title
      description
      currency
      status
    }
  }
`)

export const CreateSaleMutation = graphql(`
  mutation CreateSale($accountId: String!, $input: CreateSaleInput!) {
    createSale(accountId: $accountId, input: $input) {
      id
      title
      description
      currency
      closingMethod
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
    }
  }
`)

export const MaxBidOnBehalfMutation = graphql(`
  mutation MaxBidOnBehalf($accountId: String!, $input: MaxBidOnBehalfInput!) {
    maxBidOnBehalf(accountId: $accountId, input: $input) {
      amount
      maxAmount
      userId
      date
      bidStatus
      bidSequenceNumber
    }
  }
`)

export const OpenSaleMutation = graphql(`
  mutation OpenSale($accountId: String!, $input: OpenSaleInput!) {
    openSale(accountId: $accountId, input: $input) {
      id
      accountId
      title
      description
      currency
      status
    }
  }
`)

export const PublishSaleMutation = graphql(`
  mutation PublishSale($accountId: String!, $input: PublishSaleInput!) {
    publishSale(accountId: $accountId, input: $input) {
      id
      accountId
      title
      description
      currency
      status
    }
  }
`)

export const SetItemWinnerMutation = graphql(`
  mutation setItemWinner($accountId: String!, $input: SetItemWinnerInput!) {
    setItemWinner(accountId: $accountId, input: $input) {
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
`)

export const SetSaleItemStatusMutation = graphql(`
  mutation SetSaleItemStatus(
    $accountId: String!
    $input: SetSaleItemStatusInput!
  ) {
    setSaleItemStatus(accountId: $accountId, input: $input) {
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
`)

export const UpdateItemNumbersMutation = graphql(`
  mutation updateItemNumbers(
    $accountId: String!
    $input: UpdateItemNumbersInput!
  ) {
    updateItemNumbers(accountId: $accountId, input: $input) {
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
              amount
              userId
              date
              bidStatus
              maxAmount
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
      closingTimeCountdown
    }
  }
`)

export const UpdateSaleMutation = graphql(`
  mutation UpdateSale(
    $accountId: String!
    $saleId: String!
    $input: UpdateSaleInput!
  ) {
    updateSale(accountId: $accountId, saleId: $saleId, input: $input) {
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
      sequenceNumber
    }
  }
`)
