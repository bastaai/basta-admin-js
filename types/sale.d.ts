import { SaleStatus } from '../src/gql/generated/types';
import { Image } from './image';
import { Item } from './item';

export { SaleStatus };

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
  /** Sale status */
  status: SaleStatus;
  /** Sale Dates */
  dates: {
    openDate: string;
    closingDate: string;
  };
  /** Images attached to sale */
  images: Image[];
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: BidIncrementTable;
  /** Items that have been associated with this sale. */
  items: Item[];
  /** Get list of participants for this sale */
  participants: Participant;
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
