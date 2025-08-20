import { BidType } from './bid';
import { Image } from './image';
import { BidIncrementTableInput } from './sale';

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
  ItemNotOpen = 'ITEM_NOT_OPEN',
  ItemOpen = 'ITEM_OPEN',
  ItemPaused = 'ITEM_PAUSED',
  ItemProcessing = 'ITEM_PROCESSING',
  ItemLive = 'ITEM_LIVE',
}

export type Item = {
  /** Id of an item. */
  id: string;
  /** Sale Id, if the item is linked to a sale */
  saleId?: string;
  /** Item title */
  title: string;
  /** Item description */
  description?: string;
  /** Images attached to item */
  images: Image[];
  /** Valuation of the item in minor currency units. */
  valuationAmount?: number;
  /** Valuation currency */
  valuationCurrency?: string;
  cursor?: string;
};

/** Item input when creating an item */
export type CreateItemInput = {
  /** Description for describing the item */
  description?: string | null | undefined;
  /** Title for describing the item */
  title: string;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: number | null | undefined;
  /** Valuation currency */
  valuationCurrency?: string | null | undefined;
};

/** Item input when modifying an item */
export type UpdateItemInput = {
  description?: string | null | undefined;
  title?: string | null | undefined;
  valuationAmount?: number | null | undefined;
  valuationCurrency?: string | null | undefined;
};

export type ItemDates = {
  closingEnd?: string | null | undefined;
  closingStart?: string | null | undefined;
};

/** Add a current item to a sale. */
export type AddItemToSaleInput = {
  /** Item number is used to order items (optional) */
  ItemNumber?: number | null | undefined;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: Array<BidType> | null | undefined;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: BidIncrementTableInput | null | undefined;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: number | null | undefined;
  /** Item id of the item that you are adding to the sale. */
  itemId: string;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: number | null | undefined;
  /** Reserve of the item in minor currency unit. */
  reserve?: number | null | undefined;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: number | null | undefined;
  closingDate?: string | null | undefined;
  openDate?: string | null | undefined;
};

export type ItemMessageNotification = {
  __typename?: 'ItemMessageNotification';
  /** Id of the notification */
  id: string;
  /** Message */
  message: string;
  /** Date timestamp when message was created.
RFC3339 formatted string */
  date: string;
};

export type ItemFairWarningNotification = {
  __typename?: 'ItemFairWarningNotification';
  /** Id of the notification */
  id: string;
  /** Date timestamp when message was created.
RFC3339 formatted string */
  date: string;
};

export type ItemNotification =
  | ItemFairWarningNotification
  | ItemMessageNotification;
