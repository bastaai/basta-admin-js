import { graphql } from '../generated/gql'

export const BidOnBehalfMutation = graphql(`
  mutation BID_ON_BEHALF(bidOnBehalf($accountId: String!, $input: BidOnBehalfInput)) {
    bidOnBehalf(accountId: $accountId, input: $input){
        amount
        userId
        date
        bidStatus
    }
}
`)

export const CancelBidMutation = graphql(`
mutation CANCEL_BID(cancelBid($accountId: String!, $input: CancelBidInput)) {
    cancelBid(accountId: $accountId, input: $input)
}
`)
