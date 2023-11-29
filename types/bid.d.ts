/** Bid Type represent what kind of bid is being placed on an item. */
export enum BidType {
  /**
   * Bid is the highest amount a user is willing to pay. The auction
   * engine will automatically place the lowest bid necessary on behalf
   * of the user until the max amount is reached.
   */
  Max = 'MAX',
  /** Bid is a normal bid. */
  Normal = 'NORMAL',
  /** Bid is an offer that the user commits to buying the item for. */
  Offer = 'OFFER',
}

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

/** Bid statuses that calculates in what status the bid is. */
export enum BidStatus {
  /** User is losing the item. */
  Losing = 'LOSING',
  /** User has lost the item. */
  Lost = 'LOST',
  /** User is not bidding on the item */
  NotBidding = 'NOT_BIDDING',
  /** User submitted an offer successfully */
  Submitted = 'SUBMITTED',
  /** User is winning the item. */
  Winning = 'WINNING',
  /** User's bid has been withdrawn */
  Withdrawn = 'WITHDRAWN',
  /** User has won the item. */
  Won = 'WON',
}

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
