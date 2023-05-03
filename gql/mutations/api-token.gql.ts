import { graphql } from '../generated/gql'

export const CreateApiTokenMutation = graphql(`
  mutation CreateApiToken($accountId: String!, $input: ApiTokenInput!) {
    createApiToken(accountId: $accountId, input: $input) {
      id
      name
      generatedApiKey
      roles
    }
  }
`)

export const RevokeApiTokenMutation = graphql(`
  mutation RevokeApiToken($accountId: String!, $input: RevokeApiTokenInput!) {
    revokeApiToken(accountId: $accountId, input: $input)
  }
`)
