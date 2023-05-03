import { graphql } from '../generated/gql'

export const GetHooksQuery = graphql(`
  query GetHookSubscriptions($accountId: String!) {
    actionHookSubscriptions(accountId: $accountId) {
      accountId
      action
      url
      headers {
        key
        value
      }
    }
  }
`)
