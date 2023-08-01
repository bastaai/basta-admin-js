import { BidResponse } from '../../types/bid';
import { BastaRequest } from '../../types/request';
import { BastaResponse, BidArgs, IBidService } from '../../types/sdk';
import { BID_ON_ITEM } from '../gql/generated/operations';
import {
  BidPlaced,
  BidType,
  MutationBidOnItemV2Args,
} from '../gql/generated/types';

export class BidService implements IBidService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async placeBid({
    amount,
    itemId,
    saleId,
    userId,
  }: BidArgs): Promise<BidResponse> {
    return await this._doBid({
      bidType: BidType.Normal,
      amount: amount,
      itemId: itemId,
      saleId: saleId,
      userId: userId,
    });
  }

  async placeMaxBid({
    amount,
    itemId,
    saleId,
    userId,
  }: BidArgs): Promise<BidResponse> {
    return await this._doBid({
      bidType: BidType.Max,
      amount: amount,
      itemId: itemId,
      saleId: saleId,
      userId: userId,
    });
  }

  async placeOffer({
    amount,
    itemId,
    saleId,
    userId,
  }: BidArgs): Promise<BidResponse> {
    return await this._doBid({
      bidType: BidType.Offer,
      amount: amount,
      itemId: itemId,
      saleId: saleId,
      userId: userId,
    });
  }

  private async _doBid({
    bidType,
    amount,
    itemId,
    saleId,
    userId,
  }: {
    bidType: BidType;
    amount: number;
    itemId: string;
    saleId: string;
    userId: string;
  }): Promise<BidResponse> {
    const variables: MutationBidOnItemV2Args = {
      accountId: this._bastaReq.accountId,
      input: {
        amount: amount,
        bidType: bidType,
        itemId: itemId,
        saleId: saleId,
        userId: userId,
        appliedByUserId: userId,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        variables: variables,
        query: BID_ON_ITEM,
      }),
    });

    const json: BastaResponse<{ bidOnItemV2: BidPlaced }> = await res.json();
    const sanitized: BidPlaced = JSON.parse(
      JSON.stringify(json.data.bidOnItemV2)
    );

    if (sanitized.__typename === 'BidPlacedSuccess') {
      return {
        bid: {
          amount: sanitized.amount,
          bidId: sanitized.bidId,
          bidStatus: sanitized.bidStatus,
          bidType: sanitized.bidType,
          date: sanitized.date,
          maxAmount: sanitized.maxAmount,
        },
        success: true,
      };
    }
    return {
      success: false,
      bid: undefined,
    };
  }
}
