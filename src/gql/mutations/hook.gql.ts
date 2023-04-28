import { graphql } from '../generated/gql'

export const AddActionHookSubscriptionMutation = graphql(`
  mutation addActionHookSubscription(
    $accountId: String!
    $input: ActionHookSubscriptionInput!
  ) {
    addActionHookSubscription(accountId: $accountId, input: $input) {
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

export const DeleteActionHookSubscriptionMutation = graphql(`
  mutation deleteActionHookSubscription(
    $accountId: String!
    $input: DeleteActionHookSubscriptionInput!
  ) {
    deleteActionHookSubscription(accountId: $accountId, input: $input)
  }
`)

export const TestActionHookMutation = graphql(`
  mutation testActionHook(
    $accountId: String!
    $input: ActionHookSubscriptionInput!
  ) {
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
      responseBody
      statusCode
    }
  }
`)

export const UpdateActionHookSubscriptionMutation = graphql(`
  mutation updateActionHookSubscription(
    $accountId: String!
    $input: UpdateActionHookSubscriptionInput!
  ) {
    updateActionHookSubscription(accountId: $accountId, input: $input) {
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
