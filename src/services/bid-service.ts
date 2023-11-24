import { BastaRequest } from '../../types/request';
import { BastaResponse, IBidService } from '../../types/sdk';
import {
  BID_ON_BEHALF,
  CANCEL_LATEST_BID_ON_ITEM,
} from '../gql/generated/operations';
import {
  Bid,
  BidType,
  Bid_On_BehalfMutation,
  Bid_On_BehalfMutationVariables,
  Cancel_Latest_Bid_On_ItemMutation,
  Cancel_Latest_Bid_On_ItemMutationVariables,
} from '../gql/generated/types';

export class BidService implements IBidService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async bidOnBehalf({
    amount,
    userId,
    saleId,
    itemId,
    bidType,
  }: {
    amount: number;
    userId: string;
    saleId: string;
    itemId: string;
    bidType: BidType;
  }): Promise<Bid> {
    const variables: Bid_On_BehalfMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: {
        amount: amount,
        userId: userId,
        saleId: saleId,
        itemId: itemId,
        type: bidType,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        variables: variables,
        query: BID_ON_BEHALF,
      }),
    });

    const json: BastaResponse<Bid_On_BehalfMutation> = await res.json();
    const bid = json.data.bidOnBehalf;

    return bid;
  }

  async cancelLatestBidOnItem({
    itemId,
    saleId,
    sequenceNumber,
  }: {
    itemId: string;
    saleId: string;
    sequenceNumber: number;
  }): Promise<Bid[]> {
    const variables: Cancel_Latest_Bid_On_ItemMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: {
        itemId: itemId,
        saleId: saleId,
        sequenceNumber: sequenceNumber,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        variables: variables,
        query: CANCEL_LATEST_BID_ON_ITEM,
      }),
    });

    const json: BastaResponse<Cancel_Latest_Bid_On_ItemMutation> =
      await res.json();
    const removedBids = json.data.cancelLatestBidOnItem.removedBids;

    return removedBids;
  }
}
