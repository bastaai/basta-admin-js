import { Bid, BidType } from './bid';
import { Image } from './image';
import { ItemDates, ItemNotification, ItemStatus } from './item';

/** Sale Status represent what status a sale is currently running in. */
export enum SaleStatus {
  /** Sale is closed for bidding. */
  Closed = 'CLOSED',
  /** Sale is closing . */
  Closing = 'CLOSING',
  /** Sale is opened for bidding. */
  Opened = 'OPENED',
  /** Sale is paused. */
  Paused = 'PAUSED',
  /** Sale is being processed. */
  Processing = 'PROCESSING',
  /** Sale has been published but is not opened for bidding. */
  Published = 'PUBLISHED',
  /** Sale has not been published. This status will never appear in the API expcept when you are previewing the sale. */
  Unpublished = 'UNPUBLISHED',
  Live = 'LIVE',
}

/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export enum ClosingMethod {
  /**
   * No sniping.
   * All items close at the same time as the sale
   */
  None = 'NONE',
  /**
   * Only one item is in status CLOSING at once.
   * Other items wait in status OPEN.
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Default if ClosingMethod is not specified.
   */
  Overlapping = 'OVERLAPPING',
}

export enum ReserveAutoBidMethod {
  MaxBidBelowReserveIsMet = 'MAX_BID_BELOW_RESERVE_IS_MET',
  Standard = 'STANDARD',
}

/** SaleType represents the type of sale */
export enum SaleType {
  /** Sale is a live auction */
  Live = 'LIVE',
  /** Sale is a online timed auction */
  OnlineTimed = 'ONLINE_TIMED',
}

/** Input for creating or modifying sales. */
export type CreateSaleInput = {
  bidIncrementTable?: BidIncrementTableInput | null | undefined;
  closingMethod?: ClosingMethod | null | undefined;
  closingTimeCountdown?: number | null | undefined;
  currency?: string | null | undefined;
  dates?: SaleDatesInput | null | undefined;
  description?: string | null | undefined;
  themeType?: number | null | undefined;
  title?: string | null | undefined;
  /** Should sale be hidden from public view. Default false. */
  hidden?: boolean | null | undefined;
  /**
   * This setting governs the auction's reserve bid logic.
   * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
   * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
   * Note, this setting cannot be changed after the sale is created.
   */
  reserveAutoBidMethod?: ReserveAutoBidMethod | null | undefined;
  /** Sale type (defaults to ONLINE_TIMED) */
  type?: SaleType | null | undefined;
};

/** Bid increment table input, to control increments in a sale. */
export type BidIncrementTableInput = {
  rules: Array<RangeRuleInput>;
};

/** Input arguments for when creating or modifying a sale. */
export type SaleDatesInput = {
  /** Closing Date */
  closingDate?: string | null | undefined;
  /** Opening Date */
  openDate?: string | null | undefined;
};

/**
 * Range rules input in an increment table.
 * Values should be in minor currency units.
 * If a sale has USD as currency then the minor currency unit is cents.
 * The rule [hihgRange: $1000, lowRange: $0, step: $25] should be sent as
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export type RangeRuleInput = {
  /** High range of the rule in minor currency units. */
  highRange: number;
  /** Low range of the rule in minor currency units. */
  lowRange: number;
  /** Step of the rule in minor currency units. */
  step: number;
};

/** A sale item (item that has been added to a sale) */
export type SaleItem = {
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
  /** Id of an item. */
  id: string;
  /** Images attached to saleItem */
  images: Image[] | null | undefined;
  /** Item number */
  itemNumber: number;
  /** Current leader (user id) for the item */
  leaderId?: string | null | undefined;
  /** Reserve on the item in minor currency unit. */
  reserve?: number | null | undefined;
  reserveStatus: ReserveStatus;
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
  /** Next asks for the item in minor currency units. */
  nextAsks: Array<number>;
  notifications: Array<ItemNotification>;
  /** Item estimate in minor currency unit. */
  estimates: Estimate;
  /** Reserve met */
  reserveMet: boolean;
  /** Is item hidden for public, and not shown on your sale page. */
  hidden: boolean;
};

export enum ReserveStatus {
  /** Reserve has not been met */
  NotMet = 'NOT_MET',
  /** Reserve has been met */
  Met = 'MET',
  /** The item has no reserve */
  NoReserve = 'NO_RESERVE',
}

/** Estimates for an item */
export type Estimate = {
  /** Item high estimate */
  high?: number | null | undefined;
  /** Item low estimate */
  low?: number | null | undefined;
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
  cursor: string;
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

/** Input object for when forcing sale to published. */
export type PublishSaleInput = {
  saleId: string;
};

/** Input to remove an item from a sale */
export type RemoveSaleItemInput = {
  /** Item id of the item that you are removing from the sale. */
  itemId: string;
  /** Id of the sale that is associated with the item. */
  saleId: string;
};

/** Update SaleItem input when modifying an item */
export type UpdateSaleItemInput = {
  itemId: string;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: Array<BidType> | null | undefined;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: BidIncrementTableInput | null | undefined;
  /** Description for describing the item */
  description?: string | null | undefined;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: number | null | undefined;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: number | null | undefined;
  /** Reserve of the item in minor currency unit. */
  reserve?: number | null | undefined;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: number | null | undefined;
  /** Title for describing the item */
  title: string;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: number | null | undefined;
  /** Valuation currency in minor currency unit. */
  valuationCurrency?: string | null | undefined;
  /** Should item be hidden from public view. */
  hidden?: boolean | null | undefined;
  /**
   * Date and time when item should open up for bidding.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  openDate?: string | null | undefined;
};
