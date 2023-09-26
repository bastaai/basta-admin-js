import {
  Bid,
  BidType,
  ClosingMethod,
  ItemDates,
  ItemStatus,
  SaleStatus,
} from '../src/gql/generated/types';
import { Image } from './image';

// Enums
export { ClosingMethod, SaleStatus };

/** A sale item (item that has been added to a sale) */
export type SaleItem = {
  __typename?: 'SaleItem';
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: BidType[] | null | undefined;
  /** Get list of bids for this item */
  bids: Bid[];
  /** Current bid amount for the item as minor currency unit. */
  currentBid?: number | null | undefined;
  /** Scheduled closing timestamp for the item. */
  dates: ItemDates;
  /** Item description */
  description?: string | null | undefined;
  /** High Estimate of item in minor currency unit. */
  highEstimate: number;
  /** Id of an item. */
  id: string;
  /** Images attached to saleItem */
  images: Array<Image>;
  /** Item number */
  itemNumber: number;
  /** Current leader (user id) for the item */
  leaderId?: string | null | undefined;
  /** Low Estimate of item in minor currency unit. */
  lowEstimate: number;
  /** Reserve on the item in minor currency unit. */
  reserve?: number | null | undefined;
  /** Sale id, as items can be created without having to be associated to a sale. */
  saleId: string;
  /** Starting bid for the item in minor currency unit. */
  startingBid?: number | null | undefined;
  /** Status of the item */
  status: ItemStatus;
  /** Item title */
  title?: string | null | undefined;
  /** Number of bids that have been placed on the item */
  totalBids: number;
};

export type Sale = {
  /** Id of a sale. */
  id: string;
  /** Account ID associated with the sale */
  accountId: string;
  /** Sale Title */
  title: string;
  /** Sale Description */
  description?: string;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Chosen ClosingMethod */
  closingMethod?: ClosingMethod | null;
  /**
   * ClosingTime countdown is the sniping duration in milliseconds.
   * If not provided it defaults to 120000 (2 minutes).
   * If a sale has an OVERLAPPING closing method it also assigns the item's closing time in asceding order.
   */
  closingTimeCountdown: number;
  /** Sale status */
  status: SaleStatus;
  /** Sale Dates */
  dates: {
    openDate?: string | null;
    closingDate?: string | null;
  };
  /** Images attached to sale */
  images: Image[];
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: BidIncrementTable | null;
  /** Items that have been associated with this sale. */
  items: SaleItem[];
  /** Get list of participants for this sale */
  participants: Participant[];
};

/**
 * Participant represent a bidder in a sale, it will be automatically created
 * when the user starts bidding on a sale.
 */
export type Participant = {
  /** User Id */
  userId: string;
};

/**
 * Bid increment table represent how increments behave for a
 * specific item or a sale.
 */
export type BidIncrementTable = {
  rules: { lowRange: number; highRange: number; step: number }[];
};
