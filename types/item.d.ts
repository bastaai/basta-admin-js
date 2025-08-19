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
  /** Account ID */
  accountId: string;
  /** Cursor is used in pagination. */
  cursor: string;
  /** Item Notes. */
  itemNotes: ItemNoteConnection;
  /** Tags */
  tags: string[];
  estimates: Estimate;
  externalId?: string | null | undefined;
  metadata?: ItemMetadata | null | undefined;
  price?: ItemPrice | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: any | null | undefined;
};

/** Estimates for an item */
export type Estimate = {
  /** Item high estimate */
  high?: number | null | undefined;
  /** Item low estimate */
  low?: number | null | undefined;
};

export type ItemMetadata = {
  /** Data */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  /** JSON Schema */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: any;
};

/** Item pricing information */
export type ItemPrice = {
  /** Currency for pricing information */
  currency: Currency;
  /** Item high estimate */
  highEstimate?: number | null | undefined;
  /** Item low estimate */
  lowEstimate?: number | null | undefined;
  /** Reserve in minor currency */
  reserve: number;
  /** Starting bid in minor currency */
  startingBid: number;
};

export enum Currency {
  Aud = 'AUD',
  Cad = 'CAD',
  Chf = 'CHF',
  Dkk = 'DKK',
  Eur = 'EUR',
  Gbp = 'GBP',
  Hkd = 'HKD',
  Isk = 'ISK',
  Jpy = 'JPY',
  Nok = 'NOK',
  Sek = 'SEK',
  Usd = 'USD',
}

export type ItemNoteConnection = {
  /** ItemNote edges */
  edges: ItemNoteEdge[];
  /** Current page information */
  pageInfo: PageInfo;
};

export type ItemNoteEdge = {
  __typename?: 'ItemNoteEdge';
  /** Current ItemNote Cursor */
  cursor: string;
  /** ItemNote node */
  node: ItemNote;
};

export type ItemNote = {
  __typename?: 'ItemNote';
  /** Created time */
  created: string;
  /** ID */
  id: string;
  /** Note */
  note: string;
  /** The user that wrote the note */
  user: UserInfo;
  /** UserID */
  userId: string;
};

/** Page info for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Ending cursor */
  endCursor: string;
  /** Has next page */
  hasNextPage: boolean;
  /** Starting cursor */
  startCursor: string;
  /** Total records */
  totalRecords: number;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  /** Addresses */
  addresses: UserAddress[];
  /** Email */
  email: string;
  /** Name */
  name: string;
  /** UserId */
  userId: string;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  addressType: AddressType;
  city: string;
  country?: string | null | undefined;
  id: string;
  line1: string;
  line2?: string | null | undefined;
  postalCode?: string | null | undefined;
  state?: string | null | undefined;
};

export enum AddressType {
  Billing = 'BILLING',
  Shipping = 'SHIPPING',
}

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
  allowedBidTypes?: BidType[] | null | undefined;
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
