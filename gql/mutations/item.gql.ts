import { graphql } from '../generated/gql'

export const AddItemToSaleMutation = graphql(`
  mutation AddItemToSale($accountId: String!, $input: AddItemToSaleInput!) {
    addItemToSale(accountId: $accountId, input: $input) {
      id
      title
      totalBids
      description
      currentBid
      leaderId
      saleId
    }
  }
`)

export const CreateItemMutation = graphql(`
  mutation CreateItem($accountId: String!, $input: CreateItemInput!) {
    createItem(accountId: $accountId, input: $input) {
      id
      title
      description
    }
  }
`)

export const CreateItemForSaleMutation = graphql(`
  mutation CreateItemForSale($accountId: String!, $input: SaleItemInput!) {
    createItemForSale(accountId: $accountId, input: $input) {
      id
      title
      description
    }
  }
`)

export const RemoveItemForSaleMutation = graphql(`
  mutation removeItemFromSale(
    $accountId: String!
    $input: RemoveSaleItemInput!
  ) {
    removeItemFromSale(accountId: $accountId, input: $input) {
      id
      title
    }
  }
`)

export const UpdateItemMutation = graphql(`
  mutation UpdateItem(
    $accountId: String!
    $itemId: String!
    $input: UpdateItemInput!
  ) {
    updateItem(accountId: $accountId, itemId: $itemId, input: $input) {
      id
      title
      description
      valuationAmount
      valuationCurrency
    }
  }
`)

export const UpdateItemForSaleMutation = graphql(`
  mutation UpdateItemForSale(
    $accountId: String!
    $itemId: String!
    $input: UpdateSaleItemInput!
  ) {
    updateItemForSale(accountId: $accountId, itemId: $itemId, input: $input) {
      id
      title
      totalBids
      description
      currentBid
      leaderId
      saleId
      bids {
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
    }
  }
`)
