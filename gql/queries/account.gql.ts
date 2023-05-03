import { graphql } from '../generated/gql'

export const GetAccountQuery = graphql(`
  query GetAccount($accountId: String!) {
    account(accountId: $accountId) {
      id
      name
      email
    }
  }
`)

export const GetAccountsQuery = graphql(`
  query GetAccounts {
    accounts {
      id
      name
      email
    }
  }
`)
