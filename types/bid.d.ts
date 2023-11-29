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
  /** A unique hash composed of SaleId, ItemId and UserId */
  bidderIdentifier: string;
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

/**
 * Cancel latest bid on an item.
 * Caution: Be careful when using this operation. Multiple requests will end in multiple
 * placed bids to be cancelled.
 * Cancel latest bid will remove the latest bid and any reactive bid placed.
 * This results in 1 or 2 bids being cancelled per call.
 */
export type CancelLatestBidOnItemInput = {
  /** Item ID of the item */
  itemId: string;
  /** Sale ID of the sale that includes the item in scope. */
  saleId: string;
  /** Bid sequence number of the latest bid. */
  sequenceNumber: number;
};
