import { BidStatus, BidType } from '../src/gql/generated/types';

export { BidType };

/** A bid on a item */
export type Bid = {
  /** Amount of the bid in minor currency unit. */
  amount: number;
  /** BidId UUID string */
  bidId: string;
  /**
   * Bids sequence number tells us how bids are connected.
   * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
   * Mainly used for cancelling bids.
   */
  bidSequenceNumber: number;
  /** Bid status of currently logged in user for this item */
  bidStatus?: BidStatus | null | undefined;
  /** Date of when the bid was placed. */
  date: string;
  /** Max amount of the bid in minor currency unit. */
  maxAmount: number;
  /** Users id that placed the bid */
  userId: string;
};

export type BidResponse =
  | {
      bid: {
        amount: number;
        bidId: string;
        bidStatus: BidStatus;
        bidType: BidType;
        date: string;
        maxAmount: number;
      };
      success: true;
    }
  | {
      bid: undefined;
      success: false;
    };
