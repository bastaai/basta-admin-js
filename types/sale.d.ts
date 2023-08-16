import {
  ClosingMethod,
  SaleItem,
  SaleStatus,
} from '../src/gql/generated/types';
import { Image } from './image';

export { ClosingMethod, SaleStatus };
export { SaleItem };

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
