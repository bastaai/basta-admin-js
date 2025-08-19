export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

/** Account Information */
export type Account = {
  __typename?: 'Account';
  /** Basta Bid Client */
  bastaBidClient: boolean;
  /** Basta Live Stream Enabled */
  bastaLiveStreamEnabled: boolean;
  /** created */
  created: string;
  /** description */
  description?: Maybe<string>;
  /** Contact email address */
  email: string;
  /** account handle, identifier for the account */
  handle?: Maybe<string>;
  /** ID of the account */
  id: string;
  /** account image url */
  imageUrl?: Maybe<string>;
  /**
   * Item schema used to construct Basta UI
   * TODO: hide
   */
  itemSchema?: Maybe<Scalars['JSON']>;
  /** account description (bio) */
  links: Array<Link>;
  /** modified */
  modified?: Maybe<string>;
  /** Name of the account */
  name: string;
  /**
   * Payment details associated with account.
   * Integrating businesses will have null in this field
   */
  paymentDetails?: Maybe<PaymentDetails>;
  /** Shopify Enabled Store Id */
  shopifyConfiguration?: Maybe<ShopifyConfiguration>;
  /**
   * Populated with Seller terms have been accepted for account.
   * Integrating businesses will have null in this field.
   */
  terms?: Maybe<SellerTerms>;
};

/** Filter for the Action Hook log. */
export type ActionHookFilter = {
  /** Filter by Action Hook status */
  statuses?: InputMaybe<Array<InputMaybe<ActionHookStatus>>>;
  /** Filter by Action Hook types */
  types?: InputMaybe<Array<InputMaybe<ActionType>>>;
};

/**
 * Action Hook Log represents a recorded Action Hook HTTP request to a customers web servers.
 * Log entry may contain information about a pending, successful or failed request.
 */
export type ActionHookLog = {
  __typename?: 'ActionHookLog';
  /** Account identifier. */
  accountId: string;
  /** Action triggering the Action Hook. */
  action: ActionType;
  /** Log creation timestamp. */
  createdAt?: Maybe<string>;
  /** Error message returned by receiver. */
  error?: Maybe<string>;
  /** Latest request execution timestamp. */
  executedAt?: Maybe<string>;
  /** Headers sent with the Action Hook request. */
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  /** Action Hook log entry identifier. */
  id: string;
  /** Idempotency key */
  idempotencyKey: string;
  /** Request Payload as stringified json */
  requestPayload: string;
  /** Response from Action Hook receiver. */
  response?: Maybe<string>;
  /** Number of HTTP request retries. */
  retries?: Maybe<number>;
  /** Status of the Action Hook request. */
  status?: Maybe<ActionHookStatus>;
  /** Action Hook receiver endpoint. */
  url: string;
};

/**
 * Datatype to group together 'connected' Action Hook logs
 * based on page information.
 */
export type ActionHookLogConnection = {
  __typename?: 'ActionHookLogConnection';
  /** Action Hook log edges */
  edges: Array<ActionHookLogEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

/** Datatype encapsulating an Action Hook log entry and its cursor. */
export type ActionHookLogEdge = {
  __typename?: 'ActionHookLogEdge';
  /** Current Action Hook log cursor */
  cursor: string;
  /** Action Hook log node */
  node: ActionHookLog;
};

/** Status of the Action Hook request. */
export enum ActionHookStatus {
  /** Action Hook request failed. */
  Failed = 'FAILED',
  /** Action Hook request is queued to be sent. */
  Pending = 'PENDING',
  /** Action Hook is scheduled for a retry */
  Retry = 'RETRY',
  /** Action Hook request was successfully sent. */
  Success = 'SUCCESS',
}

/**
 * Action Hook subscription contains subscriber registration information.
 * Action Hook is an action that occurs when an event happens.
 * Action can be an HTTP POST request that will be triggered to customers web servers.
 */
export type ActionHookSubscription = {
  __typename?: 'ActionHookSubscription';
  /** Account identifier. */
  accountId: string;
  /** Name of the basta action that is being subscribed to. */
  action: ActionType;
  /** Custom HTTP header values sent with the action Action Hook. */
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  /** Action Hook receiver endpoint. */
  url: string;
};

/** Input to create an Action Hook subscription. */
export type ActionHookSubscriptionInput = {
  /** Events that trigger the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: InputMaybe<Array<InputMaybe<HttpHeaderInput>>>;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: string;
};

/** Action types (events) that can trigger Action Hooks. */
export enum ActionType {
  /** Sent when a bid on any item associated with your account occurs in the system. */
  BidOnItem = 'BID_ON_ITEM',
  /** Sent when bids are cancelled (removed) on an item in sale. */
  CancelBidOnItem = 'CANCEL_BID_ON_ITEM',
  /** Sent when an item status change associated with your account occurs in the system. */
  ItemsStatusChanged = 'ITEMS_STATUS_CHANGED',
  /** Sent when an item is added to a sale in your account */
  ItemAddedToSale = 'ITEM_ADDED_TO_SALE',
  /** Sent when an order is created */
  OrderCreated = 'ORDER_CREATED',
  /** Sent when an order is updated */
  OrderUpdated = 'ORDER_UPDATED',
  /** Sent when a sale is created associated with your account */
  SaleCreated = 'SALE_CREATED',
  /** Sent when a SaleItem is removed from sale */
  SaleItemRemoved = 'SALE_ITEM_REMOVED',
  /** Sent when SaleItem is updated */
  SaleItemUpdated = 'SALE_ITEM_UPDATED',
  /** Sent when a sale status change associated with your account occurs in the system. */
  SaleStatusChanged = 'SALE_STATUS_CHANGED',
}

export type AddFairWarningNotificationToItemInput = {
  /** Item ID */
  itemId: string;
  /** Sale ID */
  saleId: string;
};

/** Add a current item to a sale. */
export type AddItemToSaleInput = {
  /** Item number is used to order items (optional) */
  ItemNumber?: InputMaybe<number>;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /**
   * Date and time when item should close.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  closingDate?: InputMaybe<string>;
  /** Should item be hidden from public view. */
  hidden?: InputMaybe<boolean>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Item id of the item that you are adding to the sale. */
  itemId: string;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
  /**
   * Date and time when item should open up for bidding.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  openDate?: InputMaybe<string>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<number>;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<number>;
};

export type AddLiveStreamToSaleInput = {
  /** Sale ID */
  saleId: string;
  /** Live Stream Type */
  type: LiveStreamType;
  /** Live Stream URL */
  url: string;
};

export type AddMessageNotificationToItemInput = {
  /** Item ID */
  itemId: string;
  /** Message */
  message: string;
  /** Sale ID */
  saleId: string;
};

export type AddPaddleToSaleInput = {
  /** Paddle ID */
  paddleIdentifier: string;
  /** Sale ID */
  saleId: string;
  /** Paddle Type */
  type: PaddleType;
  /** Paddle User ID */
  userId: string;
};

export type AddTagToItemInput = {
  /** Item ID */
  itemId: string;
  /** Tag Name */
  name: string;
};

export type AddTagToSaleItemInput = {
  /** Item ID */
  itemId: string;
  /** Tag Name */
  name: string;
  /** Sale ID */
  saleId: string;
};

export enum AddressType {
  Billing = 'BILLING',
  Shipping = 'SHIPPING',
}

/**
 * API key represent a secret key that allows
 * software to access the API on behalf of customer.
 */
export type ApiKey = {
  __typename?: 'ApiKey';
  accountId: string;
  created: string;
  id: string;
  name: string;
  roles: Array<ApiKeyRole>;
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  /** Edges */
  edges: Array<ApiKeyEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

/**
 * Created API key represent a secret key that allows
 * software programs to access the API on behalf of customers to access the API.
 * Make sure to copy api key now as it will not shown again.
 */
export type ApiKeyCreated = {
  __typename?: 'ApiKeyCreated';
  generatedApiKey: string;
  id: string;
  name: string;
  roles: Array<ApiKeyRole>;
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Current cursor */
  cursor: string;
  /** Current node */
  node: ApiKey;
};

/** Input object for when creating a API key */
export type ApiKeyInput = {
  /** Name of the API key */
  name: string;
  /** Role associated to API key */
  role: Array<ApiKeyRole>;
};

/** Role that authorize api keys */
export enum ApiKeyRole {
  /** ADMIN HAS UNRESTRICTED ACCESS */
  Admin = 'ADMIN',
  /** READ HAS READ ONLY ACCESS */
  Read = 'READ',
}

/**
 * API token represent a token that allows
 * customers to access the API in machine and machine manner.
 */
export type ApiToken = {
  __typename?: 'ApiToken';
  accountId: string;
  created: string;
  id: string;
  name: string;
  roles: Array<ApiTokenRole>;
};

/** DEPRECATED. */
export type ApiTokenConnection = {
  __typename?: 'ApiTokenConnection';
  /** Edges */
  edges: Array<ApiTokensEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

/**
 * Created API token represent a token that allows
 * customers to access the API in machine and machine manner and includes
 * the API key that the caller needs to write down (not able to see the key again)
 */
export type ApiTokenCreated = {
  __typename?: 'ApiTokenCreated';
  generatedApiKey: string;
  id: string;
  name: string;
  roles: Array<ApiTokenRole>;
};

/**
 * DEPRECATED.
 * Input object for when creating a API token
 */
export type ApiTokenInput = {
  /** Name of the API token */
  name: string;
  /** Role associated to API token */
  role: Array<ApiTokenRole>;
};

/**
 * DEPRECATED.
 * Role that authorize api keys
 */
export enum ApiTokenRole {
  /** ADMIN HAS UNRESTRICTED ACCESS */
  Admin = 'ADMIN',
  /** READ HAS READ ONLY ACCESS */
  Read = 'READ',
}

/** DEPRECATED. */
export type ApiTokensEdge = {
  __typename?: 'ApiTokensEdge';
  /** Current cursor */
  cursor: string;
  /** Current node */
  node: ApiToken;
};

export type BastaLiveStream = {
  __typename?: 'BastaLiveStream';
  /** Channel ID */
  channelId?: Maybe<string>;
  /** Current viewers */
  currentViewers?: Maybe<number>;
  ingestUrl: string;
  /** Is stream live */
  isLive: boolean;
  /**
   * Is this option available for the account,
   * if not the account has to enable it in account settings.
   */
  optionAvailable: boolean;
  /** LiveStream URL */
  publicUrl?: Maybe<string>;
  /** Stream key */
  streamKey?: Maybe<string>;
};

/** A bid on a item */
export type Bid = {
  __typename?: 'Bid';
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
  bidStatus?: Maybe<BidStatus>;
  /** A unique hash composed of SaleId, ItemId and UserId */
  bidderIdentifier: string;
  /** Date of when the bid was placed. */
  date: string;
  /** Max amount of the bid in minor currency unit. */
  maxAmount: number;
  /** Optional paddle id if bid was placed with a paddle */
  paddle?: Maybe<Paddle>;
  /** Sale ID of the sale that includes the item in scope. */
  saleId: string;
  /** User Info */
  user?: Maybe<UserInfo>;
  /** Users id that placed the bid */
  userId: string;
};

/** Error code when failing to place a bid on an item */
export enum BidErrorCode {
  AlreadyHigherMaxBid = 'ALREADY_HIGHER_MAX_BID',
  BidAmountUpperLimitReached = 'BID_AMOUNT_UPPER_LIMIT_REACHED',
  BidLowerThanCurrentBid = 'BID_LOWER_THAN_CURRENT_BID',
  BidLowerThanCurrentMax = 'BID_LOWER_THAN_CURRENT_MAX',
  InternalError = 'INTERNAL_ERROR',
  ItemClosingPeriodPassed = 'ITEM_CLOSING_PERIOD_PASSED',
  MaxBidLowerThanCurrentMax = 'MAX_BID_LOWER_THAN_CURRENT_MAX',
  NotOpenForBidding = 'NOT_OPEN_FOR_BIDDING',
  NoError = 'NO_ERROR',
  OffIncrement = 'OFF_INCREMENT',
  StartingBidHigher = 'STARTING_BID_HIGHER',
}

/**
 * Bid increment table represent how increments behave for a
 * specific item or a sale.
 */
export type BidIncrementTable = {
  __typename?: 'BidIncrementTable';
  /** All increments in the table. */
  rules: Array<RangeRule>;
};

/** Bid increment table input, to control increments in a sale. */
export type BidIncrementTableInput = {
  rules: Array<RangeRuleInput>;
};

/** Bid on behalf of a user in a sale. */
export type BidOnBehalfInput = {
  /** bid amount of the bid in minor currency unit. */
  amount: number;
  /** item id of the item */
  itemId: string;
  /** The sale id which the item belongs that is being bidded on */
  saleId: string;
  /** The type represent what kind of bid is being placed on an item. */
  type: BidType;
  /** user id of the user that bid is being placed for. */
  userId: string;
};

export enum BidOrderByField {
  BidDate = 'BID_DATE',
}

/** A bid is either successful or there was an error */
export type BidPlaced = BidPlacedError | BidPlacedSuccess;

/** Error response for bidOnItem */
export type BidPlacedError = {
  __typename?: 'BidPlacedError';
  /** Error description. */
  error: string;
  /** Error code if an error occured. */
  errorCode: BidErrorCode;
};

/** Bid was successfully placed */
export type BidPlacedSuccess = {
  __typename?: 'BidPlacedSuccess';
  /** Amount of placed bid. Minor currency units. */
  amount: number;
  /** BidId */
  bidId: string;
  /** Bid Status of the bid */
  bidStatus: BidStatus;
  /** BidType */
  bidType: BidType;
  /** Server time of when the bid was recorded. */
  date: string;
  /**
   * MaxAmount, only set if bid was of type MaxBid.
   * Should be kept secret and never rendered to clients.
   */
  maxAmount: number;
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

/**
 * Bidder token is a token that is signed on behalf a user.
 * The token returned will allow users to bid on items.
 */
export type BidderToken = {
  __typename?: 'BidderToken';
  expiration: string;
  token: string;
};

/** Bidder token input, when generating a bidder token. */
export type BidderTokenInput = {
  /** Required metadata that needs to be included to generate a bidder token. */
  metadata: TokenMetadata;
};

export type BidsConnection = {
  __typename?: 'BidsConnection';
  edges: Array<BidsEdge>;
  pageInfo: PageInfo;
};

export type BidsEdge = {
  __typename?: 'BidsEdge';
  cursor: string;
  node: Bid;
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

/** Response when canceling latest bid on item */
export type CanceledLatestBidOnItem = {
  __typename?: 'CanceledLatestBidOnItem';
  removedBids: Array<Bid>;
};

export enum ClientPermission {
  AccessPrivate = 'ACCESS_PRIVATE',
  BidOnItem = 'BID_ON_ITEM',
}

/** Input object for when forcing sale to close. */
export type CloseSaleInput = {
  saleId: string;
};

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
   * @deprecated use item dates, will be removed in the near future
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Default if ClosingMethod is not specified.
   */
  Overlapping = 'OVERLAPPING',
}

/**
 * Input type for connecting a Shopify store to an account.
 * Include all required details for Shopify authentication.
 */
export type ConnectShopifyToAccountInput = {
  shopId: string;
  token: string;
};

export type ContinueOnboardPaymentAccountInput = {
  returnUrl: string;
};

export type CreateAccountInput = {
  /** description to be displayed on account profile as bio */
  description?: InputMaybe<string>;
  /** email for the account */
  email: string;
  /**
   * Autogenerated if left empty.
   * If provided then it has to between 3-20 charachters long.
   * Accepted symbols for handles:
   *   * lowercase alphabetical letters a-z
   *   * numbers 0-9
   *   * special charachter _ (underscore)
   */
  handle?: InputMaybe<string>;
  /** links associated with the account */
  links?: InputMaybe<Array<InputMaybe<LinkInput>>>;
  /** name for the account */
  name: string;
};

/** Create Item Image */
export type CreateItemImage = {
  imageId?: InputMaybe<string>;
  itemId: string;
  order: number;
  url: string;
};

/** Item input when creating an item */
export type CreateItemInput = {
  /** Item description */
  description?: InputMaybe<string>;
  /** Unique external identifier, e.g. warehouse id, inventory id, etc. */
  externalId?: InputMaybe<string>;
  highEstimate?: InputMaybe<number>;
  lowEstimate?: InputMaybe<number>;
  /** Custom data associated with the item */
  metadata?: InputMaybe<ItemMetadataInput>;
  /** Item price information */
  price?: InputMaybe<ItemPriceInput>;
  /** Tags for the item */
  tags?: InputMaybe<Array<string>>;
  /** Title for describing the item */
  title?: InputMaybe<string>;
  valuationAmount?: InputMaybe<number>;
  valuationCurrency?: InputMaybe<string>;
};

export type CreateItemNoteInput = {
  itemId: string;
  note: string;
};

export type CreateItemSchemaInput = {
  metadataSchema: Scalars['JSON'];
  schema: Scalars['JSON'];
};

export type CreatePaymentOrderInput = {
  /** ItemId that order belongs to */
  itemId: string;
  /** OrderLines */
  orderLines: Array<CreatePaymentOrderLineInput>;
  /** SaleId that order belongs to */
  saleId: string;
  /** UserId of user that will pay for the order */
  userId: string;
};

export type CreatePaymentOrderLineInput = {
  /** Amount of the order line in minor currency unit */
  amount: number;
  /** Description of the order line */
  description: string;
  /** Type of the order line */
  orderLineType: OrderLineType;
};

/** Input for creating or modifying sales. */
export type CreateSaleInput = {
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  closingMethod?: InputMaybe<ClosingMethod>;
  closingTimeCountdown?: InputMaybe<number>;
  currency?: InputMaybe<string>;
  dates?: InputMaybe<SaleDatesInput>;
  description?: InputMaybe<string>;
  /** Should sale be hidden from public view. Default false. */
  hidden?: InputMaybe<boolean>;
  /**
   * This setting governs the auction's reserve bid logic.
   * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
   * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
   * Note, this setting cannot be changed after the sale is created.
   */
  reserveAutoBidMethod?: InputMaybe<ReserveAutoBidMethod>;
  themeType?: InputMaybe<number>;
  title?: InputMaybe<string>;
  /** Sale type (defaults to ONLINE_TIMED) */
  type?: InputMaybe<SaleType>;
};

export type CreateUploadUrlInput = {
  /** Image Content-Type */
  contentType: string;
  /** The entities that the image belongs to */
  imageTypes: Array<ImageType>;
  /** Conditional. Must be set if imageType is Item or SaleItem */
  itemId?: InputMaybe<string>;
  /** Image Order */
  order: number;
  /** Conditional. Must be set if imageType is Sale or SaleItem */
  saleId?: InputMaybe<string>;
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

/** Input to delete an Action Hook subscription. */
export type DeleteActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
};

/** Delete image input */
export type DeleteImageInput = {
  /** The image identifier */
  imageId: string;
  /** The entities that the image belongs to */
  imageTypes: Array<ImageType>;
  /** The item identifier */
  itemId?: InputMaybe<string>;
  /** The sale identifier */
  saleId?: InputMaybe<string>;
};

/** Delete item image input */
export type DeleteItemImageInput = {
  imageId: string;
  itemId: string;
};

/** Input object for when deleting an item (including un-associating from a sale) */
export type DeleteItemInput = {
  itemId: string;
};

export type DeleteLiveStreamFromSaleInput = {
  /** Sale ID */
  saleId: string;
};

/** Input object for when deleting a sale. */
export type DeleteSaleInput = {
  saleId: string;
};

/** Estimates for an item */
export type Estimate = {
  __typename?: 'Estimate';
  /** Item high estimate */
  high?: Maybe<number>;
  /** Item low estimate */
  low?: Maybe<number>;
};

export type ExternalLiveStream = {
  __typename?: 'ExternalLiveStream';
  /** LiveStream Created */
  created: string;
  /** LiveStream Title */
  type: LiveStreamType;
  /** LiveStream Updated */
  updated: string;
  /** LiveStream URL */
  url: string;
};

export type GetItemInput = {
  __typename?: 'GetItemInput';
  itemId?: Maybe<string>;
};

export type GetItemsInput = {
  after?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  first?: InputMaybe<number>;
  itemsFilter: ItemsFilter;
  userId?: InputMaybe<string>;
};

/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export type HttpHeader = {
  __typename?: 'HttpHeader';
  key: string;
  value: string;
};

/** Input to include custom header key-value pairs with Action Hook requests. */
export type HttpHeaderInput = {
  key: string;
  value: string;
};

/** Image object */
export type Image = {
  __typename?: 'Image';
  /** ID of the image, UUID string */
  id: string;
  /** DisplayOrder for image */
  order: number;
  /** Image URL */
  url: string;
};

/** Image reordering input */
export type ImageOrderInput = {
  /** The image identifier */
  imageId: string;
  /** The new image order */
  order: number;
};

export enum ImageType {
  Account = 'ACCOUNT',
  Item = 'ITEM',
  Sale = 'SALE',
  SaleItem = 'SALE_ITEM',
}

export type Item = {
  __typename?: 'Item';
  /** Account ID */
  accountId: string;
  /** Cursor is used in pagination. */
  cursor: string;
  /** Item description */
  description?: Maybe<string>;
  /**
   * Item estimate in minor currency unit.
   * @deprecated Use price
   */
  estimates: Estimate;
  /** Unique external identifier, e.g. Warehouse id, inventory id, etc. */
  externalId?: Maybe<string>;
  /** Id of an item. */
  id: string;
  /** Images attached to item */
  images: Array<Image>;
  /** Item Notes. */
  itemNotes: ItemNoteConnection;
  /** Item Metadata */
  metadata?: Maybe<ItemMetadata>;
  /** Item pricing information */
  price?: Maybe<ItemPrice>;
  /**
   * Sale Id, if the item is linked to a sale
   * @deprecated Will be removed in the future
   */
  saleId?: Maybe<string>;
  /**
   * Item schema used to construct Basta UI
   * TODO: hide
   */
  schema?: Maybe<Scalars['JSON']>;
  /** Tags */
  tags: Array<string>;
  /** Item title */
  title?: Maybe<string>;
  /**
   * Valuation of the item in minor currency units.
   * @deprecated Will be removed in the future
   */
  valuationAmount?: Maybe<number>;
  /**
   * Valuation currency
   * @deprecated Will be removed in the future
   */
  valuationCurrency?: Maybe<string>;
};

export type ItemItemNotesArgs = {
  cursor?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  take?: InputMaybe<number>;
};

export type ItemDates = {
  __typename?: 'ItemDates';
  /**
   * UTC+0 RFC3339 formatted date and time when item should move to status CLOSED.
   * This property is extend each time a bid is received during sniping.
   * Sniping is defined as the period between closingStart and closingEnd.
   */
  closingEnd?: Maybe<string>;
  /** UTC+0 RFC3339 formatted date and time when item will start closing (start of sniping period). */
  closingStart?: Maybe<string>;
  /** UTC+0 RFC3339 formatted date and time when item will open. */
  openDate?: Maybe<string>;
};

export type ItemFairWarningNotification = {
  __typename?: 'ItemFairWarningNotification';
  /**
   * Date timestamp when message was created.
   * RFC3339 formatted string
   */
  date: string;
  /** Id of the notification */
  id: string;
};

/** Item filter */
export type ItemFilter = {
  /** Filter by item title */
  title?: InputMaybe<string>;
};

export type ItemIdsFilter = {
  itemIds?: InputMaybe<Array<string>>;
};

export type ItemMessageNotification = {
  __typename?: 'ItemMessageNotification';
  /**
   * Date timestamp when message was created.
   * RFC3339 formatted string
   */
  date: string;
  /** Id of the notification */
  id: string;
  /** Message */
  message: string;
};

/** Custom data defined by each account */
export type ItemMetadata = {
  __typename?: 'ItemMetadata';
  /** Data */
  data?: Maybe<Scalars['JSON']>;
  /** JSON Schema */
  schema?: Maybe<Scalars['JSON']>;
};

/** Item additional data input */
export type ItemMetadataInput = {
  /** JSON */
  data?: InputMaybe<Scalars['JSON']>;
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

export type ItemNoteConnection = {
  __typename?: 'ItemNoteConnection';
  /** ItemNote edges */
  edges: Array<ItemNoteEdge>;
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

export type ItemNotification =
  | ItemFairWarningNotification
  | ItemMessageNotification;

export type ItemNumberChangeInput = {
  itemId: string;
  itemNumber: number;
};

export enum ItemOrderField {
  /** Created date */
  Created = 'CREATED',
  /** Item Number */
  ItemNumber = 'ITEM_NUMBER',
}

export type ItemOrderInput = {
  /** Order direction */
  direction?: PaginationDirection;
  /** Field to order by */
  field?: ItemOrderField;
};

/** Item pricing information */
export type ItemPrice = {
  __typename?: 'ItemPrice';
  /** Currency for pricing information */
  currency: Currency;
  /** Item high estimate */
  highEstimate?: Maybe<number>;
  /** Item low estimate */
  lowEstimate?: Maybe<number>;
  /** Reserve in minor currency */
  reserve: number;
  /** Starting bid in minor currency */
  startingBid: number;
};

/** Item price information input */
export type ItemPriceInput = {
  /** Currency for pricing information */
  currency?: InputMaybe<Currency>;
  /** Item high estimate */
  highEstimate?: InputMaybe<number>;
  /** Item low estimate */
  lowEstimate?: InputMaybe<number>;
  /** Reserve in minor currency */
  reserve?: InputMaybe<number>;
  /** Starting bid in minor currency */
  startingBid?: InputMaybe<number>;
};

export type ItemSchema = {
  __typename?: 'ItemSchema';
  metadataSchema: Scalars['JSON'];
  schema: Scalars['JSON'];
};

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
  ItemLive = 'ITEM_LIVE',
  ItemNotOpen = 'ITEM_NOT_OPEN',
  ItemOpen = 'ITEM_OPEN',
  ItemPaused = 'ITEM_PAUSED',
  ItemProcessing = 'ITEM_PROCESSING',
}

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** Item edges */
  edges: Array<ItemsEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

export type ItemsEdge = {
  __typename?: 'ItemsEdge';
  /** Current item cursor */
  cursor: string;
  /** Item node */
  node: Item;
};

export type ItemsFilter = {
  onlyMyItems: boolean;
  title?: InputMaybe<string>;
};

export type Link = {
  __typename?: 'Link';
  type: LinkType;
  url: string;
};

export type LinkInput = {
  type: LinkType;
  url: string;
};

export enum LinkType {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  X = 'X',
  Youtube = 'YOUTUBE',
}

/** Live Item represents an item that is currently being auctioned in a live sale. */
export type LiveItem = {
  __typename?: 'LiveItem';
  cursor: string;
  item: SaleItem;
};

export type LiveStream = BastaLiveStream | ExternalLiveStream;

export type LiveStreamInput = {
  /** LiveStream Title */
  type: LiveStreamType;
  /** LiveStream URL */
  url: string;
};

/** LiveStreamType represents the type of live stream */
export enum LiveStreamType {
  /** Amazon IVS live stream */
  AmazonIvs = 'AMAZON_IVS',
  /**
   * Basta live stream
   * Built-in live stream for Basta
   */
  BastaLive = 'BASTA_LIVE',
  /** Generic live stream */
  Generic = 'GENERIC',
  /** YouTube live stream */
  YouTubeLive = 'YouTubeLive',
}

/** Max bid on behalf of a user in a sale. */
export type MaxBidOnBehalfInput = {
  /** item id of the item */
  itemId: string;
  /** max bid amount of the bid in minor currency unit. */
  maxAmount: number;
  /** The sale id which the item belongs that is being bidded on */
  saleId: string;
  /** user id of the user that bid is being placed for. */
  userId: string;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Not available for integrating applications.
   * Accepts seller terms on behalf of account.
   * Returns a RFC399 timestamp of when seller terms were accepted.
   */
  acceptTerms: string;
  /** Add action hook subscription */
  addActionHookSubscription: ActionHookSubscription;
  /** Add fair warning notification to an item */
  addFairWarningNotificationToItem: SaleItem;
  /** Add a currently existing item to a sale. */
  addItemToSale: SaleItem;
  /** Add live stream to a sale, this operation is idempotent. */
  addLiveStreamToSale: LiveStream;
  /** Add notification to an item */
  addMessageNotificationToItem: SaleItem;
  /** Add paddle to sale. */
  addPaddleToSale: Array<Paddle>;
  /** Add tag to an item */
  addTagToItem: Tag;
  /** Add tag to a sale item */
  addTagToSaleItem: Tag;
  /** Bid on behalf of a user */
  bidOnBehalf: Bid;
  /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
  cancelLatestBidOnItem: CanceledLatestBidOnItem;
  /** Close a sale, non forcefully. */
  closeSale: Sale;
  /**
   * Connect a a shopify store to an account.
   * Only applicable accounts will work when connecting to shopify.
   */
  connectShopifyToAccount: ShopifyConnection;
  /**
   * If payment provider onboarding was not finished then this mutation can be called to regenerate onboarding link.
   * Not available for integration applications. Only accesible via admin.
   */
  continueOnboardPaymentAccount: OnboardPaymentAccountResponse;
  /** Create an API key, that can access all functions in the API on behalf of the account. */
  createApiKey: ApiKeyCreated;
  /**
   * DEPRECATED.
   * Create an API key, that can access all functions in the API on behalf of the logged in customer.
   * @deprecated Use createApiKey mutation
   */
  createApiToken: ApiTokenCreated;
  /** Create and sign a token that can be used to bid on behalf of a user (unique user id needs to be provided) */
  createBidderToken: BidderToken;
  /** Create item. This operation will create a standalone item that is not part of a sale. */
  createItem: Item;
  /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
  createItemForSale: SaleItem;
  /**
   * Create Item Image.
   * Method only available through admin.
   */
  createItemImage: Array<Image>;
  createItemNote: ItemNote;
  /**
   * Create Schema.
   * WARNING. DO NOT USE. Temporary method that is scheduled for removal
   */
  createItemSchema: ItemSchema;
  /** Create a payment order */
  createPaymentOrder: PaymentOrder;
  /** Create a sale */
  createSale: Sale;
  /** CreateUploadUrl */
  createUploadUrl: UploadUrl;
  /**
   * Will replace createBidderToken(accountId: String!, input: BidderTokenInput!): BidderToken!
   * Only accessible for SDK users at the moment
   */
  createUserTokenV2: UserToken;
  /** Delete action hook subscription */
  deleteActionHookSubscription: boolean;
  /**
   * Delete image based on type.
   * Method only available through admin.
   */
  deleteImage: Array<Image>;
  /**
   * Delete item image.
   * Method only available through admin.
   * @deprecated Use deleteImage mutation
   */
  deleteItemImage: Array<Image>;
  /** Delete live stream from a sale */
  deleteLiveStreamFromSale: boolean;
  /** Close a sale, forcefully. */
  forceCloseSale: Sale;
  /** Open a sale, forcefully. */
  forceOpenSale: Sale;
  /** Start to close the sale, forcefully */
  forceStartClosingSale: Sale;
  /**
   * Max bid on behalf of a user
   * @deprecated Use bidOnBehalf with type as MAX
   */
  maxBidOnBehalf: Bid;
  /**
   * Onboard Basta Sellers onto supported payment provider/s.
   * Not available for integrating applications.
   */
  onboardPaymentAccount: OnboardPaymentAccountResponse;
  /** Open a sale, non forcefully. */
  openSale: Sale;
  /**
   * PassLiveItem. Mutation only available with valid session cookie.
   * Moves item to status processing and raises the reserve if it has been met.
   * Only works on "LIVE" sale type
   */
  passLiveItem: SaleItem;
  /** Publish a sale, forcefully. */
  publishSale: Sale;
  /** Register user to sale. */
  registerUserPaddle: Array<Paddle>;
  /** Remove an item from the sale. This will not delete the item completely. */
  removeItemFromSale: Sale;
  /** Remove paddle from sale. */
  removePaddleFromSale: Array<Paddle>;
  /** Remove tag from an item */
  removeTagFromItem: boolean;
  /** Remove tag from a sale item */
  removeTagFromSaleItem: boolean;
  /**
   * Reorder images based on type.
   * Method only available through admin.
   */
  reorderImages: Array<Image>;
  /**
   * Reorder item images.
   * Method only available through admin.
   * @deprecated Use reorderImages mutation
   */
  reorderItemImages: Array<Image>;
  /** Revoke the API key by id. */
  revokeApiKey: boolean;
  /**
   * DEPRECATED.
   * Revoke the API key by id.
   * @deprecated Use revokeApiKey mutation
   */
  revokeApiToken: boolean;
  /**
   * SellLiveItem. Mutation only available with valid session cookie.
   * Moves item to status processing and lowers the reserve if it has not been met.
   * Only works on "LIVE" sale type
   */
  sellLiveItem: SaleItem;
  /** Sets sale item winner. Marks bid as won and closes item. Used in offer model. */
  setItemWinner: SaleItem;
  /** Sets sale item status. Used in offer model to close item with no winner. */
  setSaleItemStatus: SaleItem;
  /** Set Sale State unforcefully */
  setSaleStatus: Sale;
  setUserIdOnBid: Bid;
  /** Start to close the sale, non forcefully */
  startClosingSale: Sale;
  /** Test ActionHook configuration. This will trigger an action hook to be sent. */
  testActionHook: TestActionHookResponse;
  /** Update Account */
  updateAccount: Account;
  /** Update action hook subscription */
  updateActionHookSubscription: ActionHookSubscription;
  /** Update dates globally for a sale, this will update all items in the sale. */
  updateGlobalDates: Sale;
  /** Update increment table globally for a sale, this will update all items in the sale. */
  updateGlobalIncrementTable: Sale;
  /** Update item. This will update information about items for all sales that has not been closed. */
  updateItem: Item;
  /** Update item associated with a sale. */
  updateItemForSale: SaleItem;
  /** Update ItemNumbers input */
  updateItemNumbers: Sale;
  /** Update a payment order */
  updatePaymentOrder: PaymentOrder;
  /** Update a sale */
  updateSale: Sale;
};

export type MutationAcceptTermsArgs = {
  accountId: string;
};

export type MutationAddActionHookSubscriptionArgs = {
  accountId: string;
  input: ActionHookSubscriptionInput;
};

export type MutationAddFairWarningNotificationToItemArgs = {
  accountId: string;
  input: AddFairWarningNotificationToItemInput;
};

export type MutationAddItemToSaleArgs = {
  accountId: string;
  input: AddItemToSaleInput;
};

export type MutationAddLiveStreamToSaleArgs = {
  accountId: string;
  input: AddLiveStreamToSaleInput;
};

export type MutationAddMessageNotificationToItemArgs = {
  accountId: string;
  input: AddMessageNotificationToItemInput;
};

export type MutationAddPaddleToSaleArgs = {
  accountId: string;
  input: AddPaddleToSaleInput;
};

export type MutationAddTagToItemArgs = {
  accountId: string;
  input: AddTagToItemInput;
};

export type MutationAddTagToSaleItemArgs = {
  accountId: string;
  input: AddTagToSaleItemInput;
};

export type MutationBidOnBehalfArgs = {
  accountId: string;
  input: BidOnBehalfInput;
};

export type MutationCancelLatestBidOnItemArgs = {
  accountId: string;
  input: CancelLatestBidOnItemInput;
};

export type MutationCloseSaleArgs = {
  accountId: string;
  input: CloseSaleInput;
};

export type MutationConnectShopifyToAccountArgs = {
  accountId: string;
  input: ConnectShopifyToAccountInput;
};

export type MutationContinueOnboardPaymentAccountArgs = {
  accountId: string;
  input: ContinueOnboardPaymentAccountInput;
};

export type MutationCreateApiKeyArgs = {
  accountId: string;
  input: ApiKeyInput;
};

export type MutationCreateApiTokenArgs = {
  accountId: string;
  input: ApiTokenInput;
};

export type MutationCreateBidderTokenArgs = {
  accountId: string;
  input: BidderTokenInput;
};

export type MutationCreateItemArgs = {
  accountId: string;
  input: CreateItemInput;
};

export type MutationCreateItemForSaleArgs = {
  accountId: string;
  input: SaleItemInput;
};

export type MutationCreateItemImageArgs = {
  accountId: string;
  input: CreateItemImage;
};

export type MutationCreateItemNoteArgs = {
  accountId: string;
  input: CreateItemNoteInput;
};

export type MutationCreateItemSchemaArgs = {
  accountId: string;
  input: CreateItemSchemaInput;
};

export type MutationCreatePaymentOrderArgs = {
  accountId: string;
  input: CreatePaymentOrderInput;
};

export type MutationCreateSaleArgs = {
  accountId: string;
  input: CreateSaleInput;
};

export type MutationCreateUploadUrlArgs = {
  accountId: string;
  input: CreateUploadUrlInput;
};

export type MutationCreateUserTokenV2Args = {
  accountId: string;
  input: UserTokenInput;
};

export type MutationDeleteActionHookSubscriptionArgs = {
  accountId: string;
  input: DeleteActionHookSubscriptionInput;
};

export type MutationDeleteImageArgs = {
  accountId: string;
  input: DeleteImageInput;
};

export type MutationDeleteItemImageArgs = {
  accountId: string;
  input: DeleteItemImageInput;
};

export type MutationDeleteLiveStreamFromSaleArgs = {
  accountId: string;
  input: DeleteLiveStreamFromSaleInput;
};

export type MutationForceCloseSaleArgs = {
  accountId: string;
  input: CloseSaleInput;
};

export type MutationForceOpenSaleArgs = {
  accountId: string;
  input: OpenSaleInput;
};

export type MutationForceStartClosingSaleArgs = {
  accountId: string;
  input: StartClosingSaleInput;
};

export type MutationMaxBidOnBehalfArgs = {
  accountId: string;
  input: MaxBidOnBehalfInput;
};

export type MutationOnboardPaymentAccountArgs = {
  accountId: string;
  input: OnboardPaymentAccountInput;
};

export type MutationOpenSaleArgs = {
  accountId: string;
  input: OpenSaleInput;
};

export type MutationPassLiveItemArgs = {
  accountId: string;
  input: PassLiveItemInput;
};

export type MutationPublishSaleArgs = {
  accountId: string;
  input: PublishSaleInput;
};

export type MutationRegisterUserPaddleArgs = {
  accountId: string;
  input: RegisterUserPaddleInput;
};

export type MutationRemoveItemFromSaleArgs = {
  accountId: string;
  input: RemoveSaleItemInput;
};

export type MutationRemovePaddleFromSaleArgs = {
  accountId: string;
  input: RemovePaddleFromSaleInput;
};

export type MutationRemoveTagFromItemArgs = {
  accountId: string;
  input: RemoveTagFromItemInput;
};

export type MutationRemoveTagFromSaleItemArgs = {
  accountId: string;
  input: RemoveTagFromSaleItemInput;
};

export type MutationReorderImagesArgs = {
  accountId: string;
  input: ReorderImagesInput;
};

export type MutationReorderItemImagesArgs = {
  accountId: string;
  input: ReorderItemImages;
};

export type MutationRevokeApiKeyArgs = {
  accountId: string;
  input: RevokeApiKeyInput;
};

export type MutationRevokeApiTokenArgs = {
  accountId: string;
  input: RevokeApiTokenInput;
};

export type MutationSellLiveItemArgs = {
  accountId: string;
  input: SellLiveItemInput;
};

export type MutationSetItemWinnerArgs = {
  accountId: string;
  input: SetItemWinnerInput;
};

export type MutationSetSaleItemStatusArgs = {
  accountId: string;
  input: SetSaleItemStatusInput;
};

export type MutationSetSaleStatusArgs = {
  accountId: string;
  input: SetSaleStatusInput;
};

export type MutationSetUserIdOnBidArgs = {
  accountId: string;
  input: SetUserIdOnBidInput;
};

export type MutationStartClosingSaleArgs = {
  accountId: string;
  input: StartClosingSaleInput;
};

export type MutationTestActionHookArgs = {
  accountId: string;
  input: ActionHookSubscriptionInput;
};

export type MutationUpdateAccountArgs = {
  accountId: string;
  input: UpdateAccountInput;
};

export type MutationUpdateActionHookSubscriptionArgs = {
  accountId: string;
  input: UpdateActionHookSubscriptionInput;
};

export type MutationUpdateGlobalDatesArgs = {
  accountId: string;
  input: UpdateGlobalDatesInput;
};

export type MutationUpdateGlobalIncrementTableArgs = {
  accountId: string;
  input: UpdateGlobalIncrementTableInput;
};

export type MutationUpdateItemArgs = {
  accountId: string;
  input: UpdateItemInput;
  itemId: string;
};

export type MutationUpdateItemForSaleArgs = {
  accountId: string;
  input: UpdateSaleItemInput;
};

export type MutationUpdateItemNumbersArgs = {
  accountId: string;
  input: UpdateItemNumbersInput;
};

export type MutationUpdatePaymentOrderArgs = {
  accountId: string;
  input: UpdatePaymentOrderInput;
};

export type MutationUpdateSaleArgs = {
  accountId: string;
  input: UpdateSaleInput;
  saleId: string;
};

export type Node = {
  /** Identification of the node. */
  id: string;
};

export type OnboardPaymentAccountInput = {
  returnUrl: string;
  sellerLocation: SellerLocation;
  type: PaymentAccountType;
};

export type OnboardPaymentAccountResponse = {
  __typename?: 'OnboardPaymentAccountResponse';
  /** Client should redirect Basta sellers to this url to finish onboarding. */
  onboardingUrl: string;
};

/** Input object for when forcing sale to open. */
export type OpenSaleInput = {
  saleId: string;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  /** Amount */
  amount: number;
  /** Description */
  description: string;
  /** OrderLineId */
  orderLineId: string;
  /** Type of the order line */
  orderLineType: OrderLineType;
};

export enum OrderLineType {
  /** When the order line amount comes from a bid */
  BidAmount = 'BidAmount',
  /** When order line amount does not come from a bid */
  DirectSale = 'DirectSale',
}

/** Paddle represent a paddle in a sale */
export type Paddle = {
  __typename?: 'Paddle';
  /** Paddle created date */
  created: string;
  /** Paddle identifier */
  identifier: string;
  /** Paddle type */
  type: PaddleType;
  /** The user info, only populated for Basta users. */
  user?: Maybe<UserInfo>;
  /** User Id of the paddle owner */
  userId: string;
};

/** PaddleType represents the type of paddle */
export enum PaddleType {
  InRoom = 'IN_ROOM',
  NotSet = 'NOT_SET',
  Online = 'ONLINE',
  Other = 'OTHER',
  Phone = 'PHONE',
}

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

/** Direction of pagination */
export enum PaginationDirection {
  /** Descending order */
  Backwards = 'BACKWARDS',
  /** Ascending order */
  Forward = 'FORWARD',
}

/**
 * Participant represent a bidder in a sale, it will be automatically created
 * when the user starts bidding on a sale.
 */
export type Participant = {
  __typename?: 'Participant';
  /** User Id */
  userId: string;
};

export type ParticipantsConnection = {
  __typename?: 'ParticipantsConnection';
  edges: Array<ParticipantsEdge>;
  pageInfo: PageInfo;
  totalCount: number;
};

export type ParticipantsEdge = {
  __typename?: 'ParticipantsEdge';
  cursor: string;
  node: Participant;
};

export type PassLiveItemInput = {
  itemId: string;
  saleId: string;
};

export enum PaymentAccountType {
  /** Express account type */
  Express = 'Express',
  /** Standard account type */
  Standard = 'Standard',
}

export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  /** External account id from payment provider */
  paymentProviderAccountId: string;
  /** Payment Setup Status */
  status: PaymentProviderStatus;
};

export type PaymentOrder = {
  __typename?: 'PaymentOrder';
  /** Created */
  created: string;
  /** InvoiceID of invoice sent to winner */
  invoiceId?: Maybe<string>;
  /** ItemID */
  itemId: string;
  /** Modified */
  modified: string;
  /** OrderID */
  orderId: string;
  /** OrderLines */
  orderLines: Array<OrderLine>;
  /** PaymentID set if payment has been made on invoice */
  paymentId?: Maybe<string>;
  /** SaleID */
  saleId: string;
  /** UserInfo for payment order */
  user?: Maybe<UserInfo>;
  /** UserID */
  userId: string;
};

export enum PaymentProviderStatus {
  /** Account has been disabled by payments provider */
  Disabled = 'DISABLED',
  /** Account has finished onboarding and details have been processed and confirmed. */
  Enabled = 'ENABLED',
  /** Account has finished onboarding for payment provider and details are being processed. */
  Processing = 'PROCESSING',
  /** Account has started onboarding for payment provider but not finished. */
  Started = 'STARTED',
}

export enum Permission {
  ReadAccount = 'READ_ACCOUNT',
  ReadActionHooks = 'READ_ACTION_HOOKS',
  ReadApiKeys = 'READ_API_KEYS',
  ReadApiTokens = 'READ_API_TOKENS',
  ReadItem = 'READ_ITEM',
  ReadSale = 'READ_SALE',
  WriteAccount = 'WRITE_ACCOUNT',
  WriteActionHooks = 'WRITE_ACTION_HOOKS',
  WriteApiKeys = 'WRITE_API_KEYS',
  WriteApiTokens = 'WRITE_API_TOKENS',
  WriteBidderToken = 'WRITE_BIDDER_TOKEN',
  WriteCancelBid = 'WRITE_CANCEL_BID',
  WriteItem = 'WRITE_ITEM',
  WriteSale = 'WRITE_SALE',
  WriteShopifyConfiguration = 'WRITE_SHOPIFY_CONFIGURATION',
}

/** Input object for when forcing sale to published. */
export type PublishSaleInput = {
  saleId: string;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch information about an account */
  account: Account;
  /** Fetch information about accessable accounts */
  accounts: Array<Account>;
  /** Get all Action Hook logs. */
  actionHookLogs: ActionHookLogConnection;
  /** Get account action hook subscriptions */
  actionHookSubscriptions: Array<ActionHookSubscription>;
  /** Get API Keys that have created. */
  apiKeys: ApiKeyConnection;
  /**
   * DEPRECATED.
   * Get API Keys that have created.
   * @deprecated Use apiKeys query
   */
  apiTokens: ApiTokenConnection;
  /** Fetch information about an Item */
  item: Item;
  /**
   * Get all items for accountId
   *
   * onlyMyItems if true filters items belonging to the current user
   */
  items: ItemsConnection;
  /** Get a single sale. */
  sale: Sale;
  /** Get SaleItem */
  saleItem?: Maybe<SaleItem>;
  /** Get all sales that have been created. You can at most fetch 50 sales at a time. */
  sales: SaleConnection;
  salesAggregate: SalesAggregate;
  /** Get API key for searching collection */
  searchKey: SearchKey;
  /** User Bid Activity */
  userBidActivity: UserBidActivityConnection;
};

export type QueryAccountArgs = {
  accountId: string;
};

export type QueryActionHookLogsArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  filter?: InputMaybe<ActionHookFilter>;
  first?: InputMaybe<number>;
};

export type QueryActionHookSubscriptionsArgs = {
  accountId: string;
};

export type QueryApiKeysArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  first?: InputMaybe<number>;
};

export type QueryApiTokensArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  first?: InputMaybe<number>;
};

export type QueryItemArgs = {
  accountId: string;
  itemId: string;
};

export type QueryItemsArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  first?: InputMaybe<number>;
  itemsFilter: ItemsFilter;
};

export type QuerySaleArgs = {
  accountId: string;
  id: string;
};

export type QuerySaleItemArgs = {
  accountId: string;
  itemId: string;
  saleId: string;
};

export type QuerySalesArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleFilter>;
  first?: InputMaybe<number>;
};

export type QuerySalesAggregateArgs = {
  accountId: string;
};

export type QuerySearchKeyArgs = {
  accountId: string;
};

export type QueryUserBidActivityArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  filter?: InputMaybe<UserBidActivityFilter>;
  first?: InputMaybe<number>;
  orderBy?: InputMaybe<BidOrderByField>;
  userId: string;
};

/**
 * Range rule explains increments in the table.
 * Represented as minor currency units.
 */
export type RangeRule = {
  __typename?: 'RangeRule';
  /** High range of the rule */
  highRange: number;
  /** Low range of the rule */
  lowRange: number;
  /** Step of the rule */
  step: number;
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

export type RegisterUserPaddleInput = {
  /** User email address */
  email: string;
  /** User first name */
  firstName: string;
  /** User last name */
  lastName: string;
  /** Paddle ID */
  paddleIdentifier: string;
  /** Sale ID */
  saleId: string;
  /** Paddle Type */
  type: PaddleType;
};

export type RemovePaddleFromSaleInput = {
  /** Paddle ID */
  paddleIdentifier: string;
  /** Sale ID */
  saleId: string;
};

/** Input to remove an item from a sale */
export type RemoveSaleItemInput = {
  /** Item id of the item that you are removing from the sale. */
  itemId: string;
  /** Id of the sale that is associated with the item. */
  saleId: string;
};

export type RemoveTagFromItemInput = {
  /** Item ID */
  itemId: string;
  /** Tag Name */
  name: string;
};

export type RemoveTagFromSaleItemInput = {
  /** Item ID */
  itemId: string;
  /** Tag Name */
  name: string;
  /** Sale ID */
  saleId: string;
};

export type ReorderImagesInput = {
  /** The new image order */
  imageOrderChanges: Array<ImageOrderInput>;
  /** The entity that the images belong to */
  imageType: ImageType;
  /** The item identifier, required for Item and SaleItem image types. */
  itemId?: InputMaybe<string>;
  /** The sale identifier, required for Sale and SaleItem image types */
  saleId?: InputMaybe<string>;
};

export type ReorderItemImages = {
  imageOrderChanges: Array<ImageOrderInput>;
  itemId: string;
};

export enum ReserveAutoBidMethod {
  MaxBidBelowReserveIsMet = 'MAX_BID_BELOW_RESERVE_IS_MET',
  Standard = 'STANDARD',
}

export enum ReserveStatus {
  /** Reserve has been met */
  Met = 'MET',
  /** Reserve has not been met */
  NotMet = 'NOT_MET',
  /** The item has no reserve */
  NoReserve = 'NO_RESERVE',
}

/** Input object for when revoking a API key */
export type RevokeApiKeyInput = {
  /** API key Id that needs to be revoked */
  apiKeyId: string;
};

/**
 * DEPRECATED.
 * Input object for when revoking a API token
 */
export type RevokeApiTokenInput = {
  /** API token Id that needs to be revoked */
  apiTokenId: string;
};

/** Sale */
export type Sale = {
  __typename?: 'Sale';
  /** Account ID associated with the sale */
  accountId: string;
  /** Is sale available on the basta bid client ? */
  bastaBidClient: boolean;
  /** Chosen ClosingMethod */
  closingMethod?: Maybe<ClosingMethod>;
  /**
   * ClosingTime countdown is the sniping duration in milliseconds.
   * If not provided it defaults to 120000 (2 minutes).
   * If a sale has an OVERLAPPING closing method it also assigns the item's closing time in asceding order.
   */
  closingTimeCountdown: number;
  /** Currency of the sale (capital letters: EUR, USD, etc.) */
  currency?: Maybe<string>;
  /** Cursor is used in pagination. */
  cursor: string;
  /** Sale Dates */
  dates: SaleDates;
  /** Sale Description */
  description?: Maybe<string>;
  /** Is sale hidden for public, and not shown on your profile. */
  hidden: boolean;
  /** Id of a sale. */
  id: string;
  /** Images attached to sale */
  images: Array<Image>;
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: Maybe<BidIncrementTable>;
  /** Items that have been associated with this sale. You can at most get 50 items at a time. */
  items: SaleItemsConnection;
  /** Live Item in the Sale (only applicable for live sales) */
  liveItem?: Maybe<LiveItem>;
  /**
   * Live Stream
   * @deprecated old livestream link, use liveVideoStream instead
   */
  liveStream?: Maybe<ExternalLiveStream>;
  liveVideoStream?: Maybe<LiveStream>;
  /** Sale paddles created for the sale */
  paddles: Array<Paddle>;
  /** Get list of participants for this sale */
  participants: ParticipantsConnection;
  /**
   * This setting governs the auction's reserve bid logic.
   * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
   * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
   * Note, this setting cannot be changed after the sale is created.
   */
  reserveAutoBidMethod: ReserveAutoBidMethod;
  /** Count of all bids in sale accross all items */
  saleBidsCounts?: Maybe<number>;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /**
   * Sale slug. Only set on basta created sales.
   * Null/empty for integrating applications.
   */
  slug?: Maybe<string>;
  /** Sale status */
  status: SaleStatus;
  /** Sum Of all highest bids per item */
  sumOfHighestBids?: Maybe<number>;
  /**
   * Sale theme type.
   * Only used for sales owned by basta
   */
  themeType?: Maybe<number>;
  /** Sale Title */
  title?: Maybe<string>;
  /** Sale type */
  type: SaleType;
};

/** Sale */
export type SaleItemsArgs = {
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleItemFilter>;
  first?: InputMaybe<number>;
  order?: InputMaybe<ItemOrderInput>;
};

/** Sale */
export type SaleLiveItemArgs = {
  itemOrderInput?: InputMaybe<ItemOrderInput>;
};

/** Sale */
export type SaleParticipantsArgs = {
  cursor?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  take?: InputMaybe<number>;
};

export type SaleActivity = Sale | SaleItem;

export type SaleConnection = {
  __typename?: 'SaleConnection';
  /** Sale edges */
  edges: Array<SalesEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

/** Sale Dates */
export type SaleDates = {
  __typename?: 'SaleDates';
  /** Date of when the sale is supposed to be automatically closed. */
  closingDate?: Maybe<string>;
  /** Date of when the sale is supposed to be manually put to live. */
  liveDate?: Maybe<string>;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: Maybe<string>;
};

/** Input arguments for when creating or modifying a sale. */
export type SaleDatesInput = {
  /** Closing Date */
  closingDate?: InputMaybe<string>;
  /** Live Date */
  liveDate?: InputMaybe<string>;
  /** Opening Date */
  openDate?: InputMaybe<string>;
};

/** Sale filter for sales. */
export type SaleFilter = {
  /** Filter by sale status */
  statuses: Array<SaleStatus>;
};

/** A sale item (item that has been added to a sale) */
export type SaleItem = {
  __typename?: 'SaleItem';
  /** AccountId that owns the item */
  accountId: string;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: Maybe<Array<BidType>>;
  /** Get list of bids for this item */
  bids: Array<Bid>;
  /** Currency for pricing information which is set on auction level. */
  currency: string;
  /** Current bid amount for the item as minor currency unit. */
  currentBid?: Maybe<number>;
  /** Cursor is used in pagination. */
  cursor: string;
  /** Scheduled closing timestamp for the item. */
  dates: ItemDates;
  /** Item description */
  description?: Maybe<string>;
  /** Item estimate in minor currency unit. */
  estimates: Estimate;
  /** External ID */
  externalId?: Maybe<string>;
  /** Is item hidden for public, and not shown on your sale page. */
  hidden: boolean;
  /** Id of an item. */
  id: string;
  /** Images attached to saleItem */
  images: Array<Image>;
  /** Overridden increment table for the item. */
  incrementTable?: Maybe<BidIncrementTable>;
  /** Item number */
  itemNumber: number;
  /**
   * Current leader (user id) for the item.
   * If SaleItem is closed then this is the user id holding the highest bid.
   */
  leaderId?: Maybe<string>;
  /** Metadata associated with the item */
  metadata?: Maybe<ItemMetadata>;
  /** Next asks for the item in minor currency units. */
  nextAsks: Array<number>;
  /** SaleItem notifications if item is part of a live sale */
  notifications: Array<ItemNotification>;
  /**
   * Payment Order information associated with item.
   * Only set on Basta hosted auctions.
   */
  paymentOrder?: Maybe<PaymentOrder>;
  /** Reserve on the item in minor currency unit. */
  reserve?: Maybe<number>;
  /**
   * Reserve met
   * @deprecated use reserveStatus instead
   */
  reserveMet: boolean;
  /** Reserve status. */
  reserveStatus: ReserveStatus;
  /** Sale id, as items can be created without having to be associated to a sale. */
  saleId: string;
  /**
   * Item slug. Only set on basta created items.
   * Null/empty for integrating applications
   */
  slug?: Maybe<string>;
  /** Starting bid for the item in minor currency unit. */
  startingBid?: Maybe<number>;
  /** Status of the item */
  status: ItemStatus;
  /**
   * Tags
   * @deprecated use tagsV2
   */
  tags: Array<string>;
  /** Tags v2 */
  tagsV2: Array<Tag>;
  /** Item title */
  title?: Maybe<string>;
  /** Number of bids that have been placed on the item */
  totalBids: number;
};

/** A sale item (item that has been added to a sale) */
export type SaleItemBidsArgs = {
  collapseSequentialUserBids?: InputMaybe<boolean>;
};

/** A sale item (item that has been added to a sale) */
export type SaleItemNextAsksArgs = {
  iterations?: InputMaybe<number>;
};

/** Item filter for sale items. */
export type SaleItemFilter = {
  /** Show hidden items */
  showHiddenItems?: InputMaybe<boolean>;
  /** Filter by item status */
  statuses: Array<ItemStatus>;
};

/** Item input when creating an item */
export type SaleItemInput = {
  /** Item number is used to order items (optional) */
  ItemNumber?: InputMaybe<number>;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /**
   * Date and time when item should close.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  closingDate?: InputMaybe<string>;
  /**
   * ClosingTime countdown is the sniping duration in milliseconds.
   * If not provided it defaults to sale's closing time countdown.
   */
  closingTimeCountdown?: InputMaybe<number>;
  /** Description for describing the item */
  description?: InputMaybe<string>;
  /** Should item be hidden from public view. Default false. */
  hidden?: InputMaybe<boolean>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
  /**
   * Date and time when item should open up for bidding.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  openDate?: InputMaybe<string>;
  /**
   * The reserve is the minimum amount that an item will sell for.
   * Reserve should be in minor currency units.
   * A reserve of 0 is treated like a no reserve sale.
   */
  reserve?: InputMaybe<number>;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<number>;
  /** Tags for the item */
  tags?: InputMaybe<Array<string>>;
  /** Title for describing the item */
  title?: InputMaybe<string>;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<number>;
  /** Valuation currency */
  valuationCurrency?: InputMaybe<string>;
};

export type SaleItemsConnection = {
  __typename?: 'SaleItemsConnection';
  /** Sale Item edges */
  edges: Array<SaleItemsEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

export type SaleItemsEdge = {
  __typename?: 'SaleItemsEdge';
  /** Current item cursor */
  cursor: string;
  /** Sale Item node */
  node: SaleItem;
};

/** Sale Status represent what status a sale is currently running in. */
export enum SaleStatus {
  /** Sale is closed for bidding. */
  Closed = 'CLOSED',
  /** Sale is closing . */
  Closing = 'CLOSING',
  /** Sale is now live */
  Live = 'LIVE',
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
}

/** SaleType represents the type of sale */
export enum SaleType {
  /** Sale is a live auction */
  Live = 'LIVE',
  /** Sale is a online timed auction */
  OnlineTimed = 'ONLINE_TIMED',
}

export type SalesAggregate = {
  __typename?: 'SalesAggregate';
  /** Number of closed sales */
  closed: number;
  /** Number of sales in a closing state */
  closing: number;
  /** Number of open sales */
  open: number;
  /** Number of published sales */
  published: number;
  /** Number of unpublished sales */
  unpublished: number;
};

export type SalesAggregateInput = {
  /** Account ID the sales belong to */
  accountId: string;
};

export type SalesEdge = {
  __typename?: 'SalesEdge';
  /** Current sale cursor */
  cursor: string;
  /** Sale node */
  node: Sale;
};

/** Search Key allows you to search our collections */
export type SearchKey = {
  __typename?: 'SearchKey';
  /** Collections */
  collections: Array<string>;
  /** Expiration */
  expiration: string;
  /** Key value */
  key: string;
};

export type SellLiveItemInput = {
  itemId: string;
  saleId: string;
};

/** Alpha2 country code for seller location */
export enum SellerLocation {
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Belgium */
  Be = 'BE',
  /** Switzerland */
  Ch = 'CH',
  /** Cyprus */
  Cy = 'CY',
  /** Germany */
  De = 'DE',
  /** Denmark */
  Dk = 'DK',
  /** Estonia */
  Ee = 'EE',
  /** Spain */
  Es = 'ES',
  /** Finland */
  Fi = 'FI',
  /** France */
  Fr = 'FR',
  /** United Kingdom */
  Gb = 'GB',
  /** Greece */
  Gr = 'GR',
  /** Croatia */
  Hr = 'HR',
  /** Ireland */
  Ie = 'IE',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Monaco */
  Mc = 'MC',
  /** Montenegro */
  Me = 'ME',
  /** Malta */
  Mt = 'MT',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Portugal */
  Pt = 'PT',
  /** Sweden */
  Se = 'SE',
  /** Slovenia */
  Si = 'SI',
  /** Slovakia */
  Sk = 'SK',
  /** San Marino */
  Sm = 'SM',
  /** United States */
  Us = 'US',
  /** Vatican City */
  Va = 'VA',
  /** Kosovo */
  Xk = 'XK',
}

/** Terms information, who and when terms were accepted */
export type SellerTerms = {
  __typename?: 'SellerTerms';
  accepted_by: string;
  accepted_date: string;
};

/** Input to set an item winner and close the item. */
export type SetItemWinnerInput = {
  bidId: string;
  itemId: string;
  saleId: string;
};

/** Input object for when setting sale item status */
export type SetSaleItemStatusInput = {
  itemId: string;
  saleId: string;
  status: ItemStatus;
};

/** Input object for when setting sale status */
export type SetSaleStatusInput = {
  saleId: string;
  status: SaleStatus;
};

export type SetUserIdOnBidInput = {
  /** Bid ID of the item that includes the bid in scope. */
  bidId: string;
  /** Item ID of the item that includes the bid in scope. */
  itemId: string;
  /** Sale ID of the sale that includes the item in scope. */
  saleId: string;
  /** Updated user ID. */
  userId: string;
};

export type ShopifyConfiguration = {
  __typename?: 'ShopifyConfiguration';
  /** Shopify Shop Id */
  shopId?: Maybe<string>;
};

/** Type representing a successful connection between an account and a Shopify store. */
export type ShopifyConnection = {
  __typename?: 'ShopifyConnection';
  accountId: string;
  shopId: string;
};

/** Input object for when starting to close a sale. */
export type StartClosingSaleInput = {
  saleId: string;
};

export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Real-time information for sale related events.
   * Both Sale and SaleItem data is sent to the socket
   */
  saleActivity: SaleActivity;
};

export type SubscriptionSaleActivityArgs = {
  accountId: string;
  itemIdFilter?: InputMaybe<ItemIdsFilter>;
  saleId: string;
};

export type Tag = {
  __typename?: 'Tag';
  /** Associated date */
  associated: string;
  /** Created date */
  created: string;
  /** id of tag */
  id: string;
  /** Tag name */
  name: string;
};

/**
 * Action Hook response from test message.
 * Contains the status code received.
 */
export type TestActionHookResponse = {
  __typename?: 'TestActionHookResponse';
  requestHeaders: Array<Maybe<HttpHeader>>;
  requestMethod: string;
  requestPayload: string;
  responseBody?: Maybe<string>;
  responseHeaders?: Maybe<Array<Maybe<HttpHeader>>>;
  statusCode: number;
};

/**
 * Token metadata is mandatory information that needs to be included
 * to create a signed bidder token.
 */
export type TokenMetadata = {
  /** User permissions granted by the token, if left empty token will include all permissions. */
  permissions?: InputMaybe<Array<ClientPermission>>;
  /** Time to live of the bidders token, represented minutes. */
  ttl: number;
  /** Unique User ID that represents a user in customer's user database. */
  userId: string;
};

/**
 * Update Account properties.
 * Only provided values will be applied.
 * Null/Nil values are ignored.
 */
export type UpdateAccountInput = {
  /** description to be displayed on account profile as bio */
  description?: InputMaybe<string>;
  /** email */
  email?: InputMaybe<string>;
  /** Enable basta streaming for the account (charges will apply) */
  enableBastaStreaming?: InputMaybe<boolean>;
  /** Autogenerate a new handle as part of the update */
  generateNewHandle?: InputMaybe<boolean>;
  /** handle */
  handle?: InputMaybe<string>;
  /** links associated with the account */
  links?: InputMaybe<Array<InputMaybe<LinkInput>>>;
  /** name */
  name?: InputMaybe<string>;
};

/** Input to update an Action Hook subscription. */
export type UpdateActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: InputMaybe<Array<InputMaybe<HttpHeaderInput>>>;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: string;
};

/** Input object for global updates of dates for a sale */
export type UpdateGlobalDatesInput = {
  closingDate: string;
  openDate: string;
  saleId: string;
};

/** Input object for global updates of increment table for a sale */
export type UpdateGlobalIncrementTableInput = {
  incrementTable: BidIncrementTableInput;
  saleId: string;
};

/** Item input when modifying an item */
export type UpdateItemInput = {
  /** Item description */
  description?: InputMaybe<string>;
  /** Unique external identifier, e.g. warehouse id, inventory id, etc. */
  externalId?: InputMaybe<string>;
  /** Custom data associated with the item */
  metadata?: InputMaybe<ItemMetadataInput>;
  /** Item price information */
  price?: InputMaybe<ItemPriceInput>;
  /** Tags for the item */
  tags?: InputMaybe<Array<string>>;
  /** Title for describing the item */
  title?: InputMaybe<string>;
  valuationAmount?: InputMaybe<number>;
  valuationCurrency?: InputMaybe<string>;
};

export type UpdateItemNumbersInput = {
  itemNumberChanges: Array<ItemNumberChangeInput>;
  saleId: string;
};

export type UpdatePaymentOrderInput = {
  /** OrderId that order belongs to */
  orderId: string;
  orderLines?: InputMaybe<Array<UpdatePaymentOrderLineInput>>;
  /**
   * UserId of user that will pay for the order.
   * Optional. If not provided, the order will be updated for the current user.
   */
  userId?: InputMaybe<string>;
};

export type UpdatePaymentOrderLineInput = {
  /**
   * Amount of the order line in minor currency unit.
   * Optional. If not provided, the order line amount will not be updated.
   */
  amount?: InputMaybe<number>;
  /**
   * Description of the order line
   * Optional. If not provided, the order line description will not be updated.
   */
  description?: InputMaybe<string>;
  /** OrderLineId */
  orderLineId: string;
  /**
   * Type of the order line
   * Optional. If not provided, the order line type will not be updated.
   */
  orderLineType?: InputMaybe<OrderLineType>;
};

/**
 * Input for updating a sale.
 * All fields are mandatory. If something shouldn't change then
 * the provided value should be the same as it was before.
 */
export type UpdateSaleInput = {
  bidIncrementTable: BidIncrementTableInput;
  closingMethod: ClosingMethod;
  closingTimeCountdown: number;
  currency: string;
  dates?: InputMaybe<SaleDatesInput>;
  description: string;
  /** Should sale be hidden from public view. Default false. */
  hidden?: InputMaybe<boolean>;
  /** optional live stream information */
  liveStream?: InputMaybe<LiveStreamInput>;
  /** sale Type */
  saleType?: InputMaybe<SaleType>;
  slug?: InputMaybe<string>;
  themeType?: InputMaybe<number>;
  title: string;
};

/**
 * Update SaleItem input when modifying an item.
 * All inputs should be set
 */
export type UpdateSaleItemInput = {
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /**
   * Date and time when item should close.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  closingDate?: InputMaybe<string>;
  /**
   * ClosingTime countdown is the sniping duration in milliseconds.
   * If not provided it defaults to sale's closing time countdown.
   */
  closingTimeCountdown?: InputMaybe<number>;
  /** Description for describing the item */
  description?: InputMaybe<string>;
  /** Should item be hidden from public view. */
  hidden?: InputMaybe<boolean>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Id of the item that should be updated */
  itemId: string;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
  /**
   * Date and time when item should open up for bidding.
   * Format: RFC3339 timestamp.
   * Example: "2019-10-12T07:20:50.52Z"
   */
  openDate?: InputMaybe<string>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<number>;
  /** Id of the sale that the item belongs to */
  saleId: string;
  /**
   * Update SaleSlug.
   * Only applies to sales hosted by Basta.
   */
  slug?: InputMaybe<string>;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<number>;
  /** Tags for the sale item */
  tags?: InputMaybe<Array<string>>;
  /** Title for describing the item */
  title?: InputMaybe<string>;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<number>;
  /** Valuation currency in minor currency unit. */
  valuationCurrency?: InputMaybe<string>;
};

export type UploadUrl = {
  __typename?: 'UploadUrl';
  /** Headers that should be sent with upload */
  headers?: Maybe<Array<HttpHeader>>;
  /** Image ID */
  imageId: string;
  /** Image url to render the image after upload */
  imageUrl: string;
  /** Order */
  order: number;
  /** The signed upload url. */
  uploadUrl: string;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  addressType: AddressType;
  city: string;
  country?: Maybe<string>;
  id: string;
  line1: string;
  line2?: Maybe<string>;
  postalCode?: Maybe<string>;
  state?: Maybe<string>;
};

export type UserBidActivity = {
  __typename?: 'UserBidActivity';
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
  bidStatus?: Maybe<BidStatus>;
  /** Date of when the bid was placed. */
  date: string;
  /** ItemId */
  itemId: string;
  /** Max amount of the bid in minor currency unit. */
  maxAmount: number;
  /** Optional paddle id if bid was placed with a paddle */
  paddle?: Maybe<Paddle>;
  /** Sale ID of the sale that includes the item in scope. */
  saleId: string;
  /** Users id that placed the bid */
  userId: string;
};

export type UserBidActivityConnection = {
  __typename?: 'UserBidActivityConnection';
  edges: Array<UserBidActivityEdge>;
  pageInfo: PageInfo;
};

export type UserBidActivityEdge = {
  __typename?: 'UserBidActivityEdge';
  cursor: string;
  node: UserBidActivity;
};

export type UserBidActivityFilter = {
  itemId?: InputMaybe<string>;
  saleId?: InputMaybe<string>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  /** Addresses */
  addresses: Array<UserAddress>;
  /** Email */
  email: string;
  /** Name */
  name: string;
  /** UserId */
  userId: string;
};

/**
 * A signed jwt token from Basta that is inteded to authenticate a
 * single user for a websocket connection to get updates based on user context.
 */
export type UserToken = {
  __typename?: 'UserToken';
  /** Expiration date as string. */
  expirationDate: string;
  /** Signed JWT token that can be used for websocket authentication */
  token: string;
};

export type UserTokenInput = {
  /** Time to live for the user token, represented as minutes */
  ttlMinutes: number;
  /** Unique UserID that represents a user in your system. */
  userID: string;
};

export type Create_Api_KeyMutationVariables = Exact<{
  accountId: string;
  input: ApiKeyInput;
}>;

export type Create_Api_KeyMutation = {
  __typename?: 'Mutation';
  createApiKey: {
    __typename?: 'ApiKeyCreated';
    id: string;
    name: string;
    roles: Array<ApiKeyRole>;
    generatedApiKey: string;
  };
};

export type Create_User_TokenMutationVariables = Exact<{
  accountId: string;
  input: UserTokenInput;
}>;

export type Create_User_TokenMutation = {
  __typename?: 'Mutation';
  createUserTokenV2: {
    __typename?: 'UserToken';
    token: string;
    expirationDate: string;
  };
};

export type Revoke_Api_KeyMutationVariables = Exact<{
  accountId: string;
  input: RevokeApiKeyInput;
}>;

export type Revoke_Api_KeyMutation = {
  __typename?: 'Mutation';
  revokeApiKey: boolean;
};

export type Bid_On_BehalfMutationVariables = Exact<{
  accountId: string;
  input: BidOnBehalfInput;
}>;

export type Bid_On_BehalfMutation = {
  __typename?: 'Mutation';
  bidOnBehalf: {
    __typename?: 'Bid';
    bidId: string;
    saleId: string;
    amount: number;
    maxAmount: number;
    userId: string;
    date: string;
    bidStatus?: BidStatus | null;
    bidSequenceNumber: number;
    bidderIdentifier: string;
  };
};

export type Cancel_Latest_Bid_On_ItemMutationVariables = Exact<{
  accountId: string;
  input: CancelLatestBidOnItemInput;
}>;

export type Cancel_Latest_Bid_On_ItemMutation = {
  __typename?: 'Mutation';
  cancelLatestBidOnItem: {
    __typename?: 'CanceledLatestBidOnItem';
    removedBids: Array<{
      __typename?: 'Bid';
      bidId: string;
      saleId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
  };
};

export type Add_Item_To_SaleMutationVariables = Exact<{
  accountId: string;
  input: AddItemToSaleInput;
}>;

export type Add_Item_To_SaleMutation = {
  __typename?: 'Mutation';
  addItemToSale: {
    __typename?: 'SaleItem';
    id: string;
    title?: string | null;
    totalBids: number;
    description?: string | null;
    currentBid?: number | null;
    leaderId?: string | null;
    saleId: string;
    itemNumber: number;
    reserve?: number | null;
    startingBid?: number | null;
    status: ItemStatus;
    allowedBidTypes?: Array<BidType> | null;
    hidden: boolean;
    nextAsks: Array<number>;
    reserveMet: boolean;
    reserveStatus: ReserveStatus;
    notifications: Array<
      | { __typename: 'ItemFairWarningNotification'; id: string; date: string }
      | {
          __typename: 'ItemMessageNotification';
          id: string;
          message: string;
          date: string;
        }
    >;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      saleId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    dates: {
      __typename?: 'ItemDates';
      openDate?: string | null;
      closingStart?: string | null;
      closingEnd?: string | null;
    };
    images: Array<{
      __typename?: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Create_Item_For_SaleMutationVariables = Exact<{
  accountId: string;
  input: SaleItemInput;
}>;

export type Create_Item_For_SaleMutation = {
  __typename?: 'Mutation';
  createItemForSale: {
    __typename?: 'SaleItem';
    id: string;
    title?: string | null;
    totalBids: number;
    description?: string | null;
    currentBid?: number | null;
    leaderId?: string | null;
    saleId: string;
    itemNumber: number;
    reserve?: number | null;
    startingBid?: number | null;
    status: ItemStatus;
    allowedBidTypes?: Array<BidType> | null;
    hidden: boolean;
    nextAsks: Array<number>;
    reserveMet: boolean;
    reserveStatus: ReserveStatus;
    notifications: Array<
      | { __typename: 'ItemFairWarningNotification'; id: string; date: string }
      | {
          __typename: 'ItemMessageNotification';
          id: string;
          message: string;
          date: string;
        }
    >;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      saleId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    dates: {
      __typename?: 'ItemDates';
      openDate?: string | null;
      closingStart?: string | null;
      closingEnd?: string | null;
    };
    images: Array<{
      __typename?: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Create_ItemMutationVariables = Exact<{
  accountId: string;
  input: CreateItemInput;
}>;

export type Create_ItemMutation = {
  __typename?: 'Mutation';
  createItem: {
    __typename?: 'Item';
    id: string;
    accountId: string;
    cursor: string;
    tags: Array<string>;
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
    itemNotes: {
      __typename?: 'ItemNoteConnection';
      edges: Array<{
        __typename?: 'ItemNoteEdge';
        cursor: string;
        node: {
          __typename?: 'ItemNote';
          id: string;
          note: string;
          created: string;
          userId: string;
          user: {
            __typename?: 'UserInfo';
            userId: string;
            name: string;
            email: string;
            addresses: Array<{
              __typename?: 'UserAddress';
              id: string;
              addressType: AddressType;
              line1: string;
              line2?: string | null;
              city: string;
              state?: string | null;
              postalCode?: string | null;
              country?: string | null;
            }>;
          };
        };
      }>;
      pageInfo: {
        __typename?: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
    };
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Remove_Item_From_SaleMutationVariables = Exact<{
  accountId: string;
  input: RemoveSaleItemInput;
}>;

export type Remove_Item_From_SaleMutation = {
  __typename?: 'Mutation';
  removeItemFromSale: {
    __typename?: 'Sale';
    id: string;
    cursor: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
    bastaBidClient: boolean;
    hidden: boolean;
    reserveAutoBidMethod: ReserveAutoBidMethod;
    type: SaleType;
    paddles: Array<{
      __typename: 'Paddle';
      identifier: string;
      userId: string;
      created: string;
      type: PaddleType;
    }>;
    incrementTable?: {
      __typename?: 'BidIncrementTable';
      rules: Array<{
        __typename?: 'RangeRule';
        highRange: number;
        lowRange: number;
        step: number;
      }>;
    } | null;
    dates: {
      __typename?: 'SaleDates';
      closingDate?: string | null;
      openDate?: string | null;
    };
    images: Array<{
      __typename?: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
    items: {
      __typename?: 'SaleItemsConnection';
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
      edges: Array<{
        __typename?: 'SaleItemsEdge';
        cursor: string;
        node: {
          __typename?: 'SaleItem';
          id: string;
          accountId: string;
          currency: string;
          cursor: string;
          reserveStatus: ReserveStatus;
          tags: Array<string>;
          title?: string | null;
          totalBids: number;
          description?: string | null;
          currentBid?: number | null;
          leaderId?: string | null;
          saleId: string;
          reserve?: number | null;
          startingBid?: number | null;
          itemNumber: number;
          allowedBidTypes?: Array<BidType> | null;
          status: ItemStatus;
          hidden: boolean;
          nextAsks: Array<number>;
          reserveMet: boolean;
          tagsV2: Array<{
            __typename?: 'Tag';
            id: string;
            name: string;
            created: string;
            associated: string;
          }>;
          notifications: Array<
            | {
                __typename: 'ItemFairWarningNotification';
                id: string;
                date: string;
              }
            | {
                __typename: 'ItemMessageNotification';
                id: string;
                message: string;
                date: string;
              }
          >;
          estimates: {
            __typename?: 'Estimate';
            high?: number | null;
            low?: number | null;
          };
          images: Array<{
            __typename?: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename?: 'Bid';
            bidId: string;
            saleId: string;
            amount: number;
            userId: string;
            date: string;
            bidStatus?: BidStatus | null;
            maxAmount: number;
            bidSequenceNumber: number;
            bidderIdentifier: string;
          }>;
          dates: {
            __typename?: 'ItemDates';
            openDate?: string | null;
            closingStart?: string | null;
            closingEnd?: string | null;
          };
        };
      }>;
    };
    participants: {
      __typename?: 'ParticipantsConnection';
      totalCount: number;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
      edges: Array<{
        __typename?: 'ParticipantsEdge';
        cursor: string;
        node: { __typename?: 'Participant'; userId: string };
      }>;
    };
  };
};

export type Update_Item_For_SaleMutationVariables = Exact<{
  accountId: string;
  input: UpdateSaleItemInput;
}>;

export type Update_Item_For_SaleMutation = {
  __typename?: 'Mutation';
  updateItemForSale: {
    __typename?: 'SaleItem';
    id: string;
    title?: string | null;
    totalBids: number;
    description?: string | null;
    currentBid?: number | null;
    leaderId?: string | null;
    saleId: string;
    reserve?: number | null;
    startingBid?: number | null;
    status: ItemStatus;
    itemNumber: number;
    allowedBidTypes?: Array<BidType> | null;
    hidden: boolean;
    nextAsks: Array<number>;
    reserveMet: boolean;
    reserveStatus: ReserveStatus;
    notifications: Array<
      | { __typename: 'ItemFairWarningNotification'; id: string; date: string }
      | {
          __typename: 'ItemMessageNotification';
          id: string;
          message: string;
          date: string;
        }
    >;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      saleId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    dates: {
      __typename?: 'ItemDates';
      openDate?: string | null;
      closingStart?: string | null;
      closingEnd?: string | null;
    };
    images: Array<{
      __typename?: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Update_ItemMutationVariables = Exact<{
  accountId: string;
  itemId: string;
  input: UpdateItemInput;
}>;

export type Update_ItemMutation = {
  __typename?: 'Mutation';
  updateItem: {
    __typename?: 'Item';
    id: string;
    accountId: string;
    cursor: string;
    tags: Array<string>;
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
    itemNotes: {
      __typename?: 'ItemNoteConnection';
      edges: Array<{
        __typename?: 'ItemNoteEdge';
        cursor: string;
        node: {
          __typename?: 'ItemNote';
          id: string;
          note: string;
          created: string;
          userId: string;
          user: {
            __typename?: 'UserInfo';
            userId: string;
            name: string;
            email: string;
            addresses: Array<{
              __typename?: 'UserAddress';
              id: string;
              addressType: AddressType;
              line1: string;
              line2?: string | null;
              city: string;
              state?: string | null;
              postalCode?: string | null;
              country?: string | null;
            }>;
          };
        };
      }>;
      pageInfo: {
        __typename?: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
    };
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Create_SaleMutationVariables = Exact<{
  accountId: string;
  input: CreateSaleInput;
}>;

export type Create_SaleMutation = {
  __typename?: 'Mutation';
  createSale: {
    __typename: 'Sale';
    id: string;
    cursor: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
    type: SaleType;
    bastaBidClient: boolean;
    hidden: boolean;
    reserveAutoBidMethod: ReserveAutoBidMethod;
    paddles: Array<{
      __typename: 'Paddle';
      created: string;
      identifier: string;
      type: PaddleType;
      userId: string;
    }>;
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
    items: {
      __typename: 'SaleItemsConnection';
      edges: Array<{
        __typename: 'SaleItemsEdge';
        cursor: string;
        node: {
          __typename: 'SaleItem';
          id: string;
          accountId: string;
          currency: string;
          cursor: string;
          reserveStatus: ReserveStatus;
          tags: Array<string>;
          title?: string | null;
          totalBids: number;
          description?: string | null;
          currentBid?: number | null;
          leaderId?: string | null;
          saleId: string;
          reserve?: number | null;
          startingBid?: number | null;
          status: ItemStatus;
          itemNumber: number;
          hidden: boolean;
          nextAsks: Array<number>;
          reserveMet: boolean;
          tagsV2: Array<{
            __typename?: 'Tag';
            id: string;
            name: string;
            created: string;
            associated: string;
          }>;
          notifications: Array<
            | {
                __typename: 'ItemFairWarningNotification';
                id: string;
                date: string;
              }
            | {
                __typename: 'ItemMessageNotification';
                id: string;
                message: string;
                date: string;
              }
          >;
          estimates: {
            __typename?: 'Estimate';
            low?: number | null;
            high?: number | null;
          };
          images: Array<{
            __typename: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename: 'Bid';
            bidId: string;
            saleId: string;
            amount: number;
            maxAmount: number;
            userId: string;
            date: string;
            bidStatus?: BidStatus | null;
            bidSequenceNumber: number;
            bidderIdentifier: string;
          }>;
          dates: {
            __typename: 'ItemDates';
            closingStart?: string | null;
            closingEnd?: string | null;
          };
        };
      }>;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
    };
    incrementTable?: {
      __typename: 'BidIncrementTable';
      rules: Array<{
        __typename: 'RangeRule';
        highRange: number;
        lowRange: number;
        step: number;
      }>;
    } | null;
    dates: {
      __typename: 'SaleDates';
      closingDate?: string | null;
      openDate?: string | null;
    };
    participants: {
      __typename: 'ParticipantsConnection';
      totalCount: number;
      edges: Array<{
        __typename: 'ParticipantsEdge';
        cursor: string;
        node: { __typename: 'Participant'; userId: string };
      }>;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
    };
  };
};

export type Publish_SaleMutationVariables = Exact<{
  accountId: string;
  input: PublishSaleInput;
}>;

export type Publish_SaleMutation = {
  __typename?: 'Mutation';
  publishSale: {
    __typename: 'Sale';
    id: string;
    cursor: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
    type: SaleType;
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
    items: {
      __typename: 'SaleItemsConnection';
      edges: Array<{
        __typename: 'SaleItemsEdge';
        cursor: string;
        node: {
          __typename: 'SaleItem';
          id: string;
          title?: string | null;
          totalBids: number;
          description?: string | null;
          currentBid?: number | null;
          leaderId?: string | null;
          saleId: string;
          reserve?: number | null;
          startingBid?: number | null;
          status: ItemStatus;
          itemNumber: number;
          nextAsks: Array<number>;
          reserveMet: boolean;
          reserveStatus: ReserveStatus;
          hidden: boolean;
          notifications: Array<
            | {
                __typename: 'ItemFairWarningNotification';
                id: string;
                date: string;
              }
            | {
                __typename: 'ItemMessageNotification';
                id: string;
                message: string;
                date: string;
              }
          >;
          estimates: {
            __typename?: 'Estimate';
            low?: number | null;
            high?: number | null;
          };
          images: Array<{
            __typename: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename: 'Bid';
            bidId: string;
            saleId: string;
            amount: number;
            maxAmount: number;
            userId: string;
            date: string;
            bidStatus?: BidStatus | null;
            bidSequenceNumber: number;
            bidderIdentifier: string;
          }>;
          dates: {
            __typename: 'ItemDates';
            openDate?: string | null;
            closingStart?: string | null;
            closingEnd?: string | null;
          };
        };
      }>;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
      };
    };
    incrementTable?: {
      __typename: 'BidIncrementTable';
      rules: Array<{
        __typename: 'RangeRule';
        highRange: number;
        lowRange: number;
        step: number;
      }>;
    } | null;
    dates: {
      __typename: 'SaleDates';
      closingDate?: string | null;
      openDate?: string | null;
    };
    participants: {
      __typename: 'ParticipantsConnection';
      totalCount: number;
      edges: Array<{
        __typename: 'ParticipantsEdge';
        cursor: string;
        node: { __typename: 'Participant'; userId: string };
      }>;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
      };
    };
  };
};

export type Add_Hook_SubscriptionMutationVariables = Exact<{
  accountId: string;
  input: ActionHookSubscriptionInput;
}>;

export type Add_Hook_SubscriptionMutation = {
  __typename?: 'Mutation';
  addActionHookSubscription: {
    __typename?: 'ActionHookSubscription';
    accountId: string;
    action: ActionType;
    url: string;
    headers?: Array<{
      __typename?: 'HttpHeader';
      key: string;
      value: string;
    } | null> | null;
  };
};

export type Delete_Hook_SubscriptionMutationVariables = Exact<{
  accountId: string;
  input: DeleteActionHookSubscriptionInput;
}>;

export type Delete_Hook_SubscriptionMutation = {
  __typename?: 'Mutation';
  deleteActionHookSubscription: boolean;
};

export type Test_Hook_SubscriptionMutationVariables = Exact<{
  accountId: string;
  input: ActionHookSubscriptionInput;
}>;

export type Test_Hook_SubscriptionMutation = {
  __typename?: 'Mutation';
  testActionHook: {
    __typename?: 'TestActionHookResponse';
    requestPayload: string;
    requestMethod: string;
    statusCode: number;
    requestHeaders: Array<{
      __typename?: 'HttpHeader';
      key: string;
      value: string;
    } | null>;
    responseHeaders?: Array<{
      __typename?: 'HttpHeader';
      key: string;
      value: string;
    } | null> | null;
  };
};

export type Update_Hook_SubscriptionMutationVariables = Exact<{
  accountId: string;
  input: UpdateActionHookSubscriptionInput;
}>;

export type Update_Hook_SubscriptionMutation = {
  __typename?: 'Mutation';
  updateActionHookSubscription: {
    __typename?: 'ActionHookSubscription';
    accountId: string;
    action: ActionType;
    url: string;
    headers?: Array<{
      __typename?: 'HttpHeader';
      key: string;
      value: string;
    } | null> | null;
  };
};

export type Get_AccountQueryVariables = Exact<{
  accountId: string;
}>;

export type Get_AccountQuery = {
  __typename?: 'Query';
  account: {
    __typename?: 'Account';
    id: string;
    name: string;
    email: string;
    created: string;
    modified?: string | null;
    handle?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    links: Array<{ __typename?: 'Link'; url: string; type: LinkType }>;
    paymentDetails?: {
      __typename?: 'PaymentDetails';
      paymentProviderAccountId: string;
      status: PaymentProviderStatus;
    } | null;
  };
};

export type Get_Api_KeysQueryVariables = Exact<{
  accountId: string;
  first?: InputMaybe<number>;
  after?: InputMaybe<string>;
}>;

export type Get_Api_KeysQuery = {
  __typename?: 'Query';
  apiKeys: {
    __typename?: 'ApiKeyConnection';
    edges: Array<{
      __typename?: 'ApiKeyEdge';
      cursor: string;
      node: {
        __typename?: 'ApiKey';
        id: string;
        name: string;
        accountId: string;
        roles: Array<ApiKeyRole>;
        created: string;
      };
    }>;
  };
};

export type Get_All_ItemsQueryVariables = Exact<{
  accountId: string;
  itemsFilter: ItemsFilter;
  first?: InputMaybe<number>;
  after?: InputMaybe<string>;
}>;

export type Get_All_ItemsQuery = {
  __typename?: 'Query';
  items: {
    __typename?: 'ItemsConnection';
    edges: Array<{
      __typename?: 'ItemsEdge';
      cursor: string;
      node: {
        __typename?: 'Item';
        id: string;
        accountId: string;
        cursor: string;
        tags: Array<string>;
        description?: string | null;
        title?: string | null;
        valuationAmount?: number | null;
        valuationCurrency?: string | null;
        itemNotes: {
          __typename?: 'ItemNoteConnection';
          edges: Array<{
            __typename?: 'ItemNoteEdge';
            cursor: string;
            node: {
              __typename?: 'ItemNote';
              id: string;
              note: string;
              created: string;
              userId: string;
              user: {
                __typename?: 'UserInfo';
                userId: string;
                name: string;
                email: string;
                addresses: Array<{
                  __typename?: 'UserAddress';
                  id: string;
                  addressType: AddressType;
                  line1: string;
                  line2?: string | null;
                  city: string;
                  state?: string | null;
                  postalCode?: string | null;
                  country?: string | null;
                }>;
              };
            };
          }>;
          pageInfo: {
            __typename?: 'PageInfo';
            startCursor: string;
            endCursor: string;
            hasNextPage: boolean;
            totalRecords: number;
          };
        };
        estimates: {
          __typename?: 'Estimate';
          low?: number | null;
          high?: number | null;
        };
        images: Array<{
          __typename: 'Image';
          id: string;
          url: string;
          order: number;
        }>;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      endCursor: string;
    };
  };
};

export type Get_ItemQueryVariables = Exact<{
  accountId: string;
  itemId: string;
}>;

export type Get_ItemQuery = {
  __typename?: 'Query';
  item: {
    __typename?: 'Item';
    id: string;
    accountId: string;
    cursor: string;
    tags: Array<string>;
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
    itemNotes: {
      __typename?: 'ItemNoteConnection';
      edges: Array<{
        __typename?: 'ItemNoteEdge';
        cursor: string;
        node: {
          __typename?: 'ItemNote';
          id: string;
          note: string;
          created: string;
          userId: string;
          user: {
            __typename?: 'UserInfo';
            userId: string;
            name: string;
            email: string;
            addresses: Array<{
              __typename?: 'UserAddress';
              id: string;
              addressType: AddressType;
              line1: string;
              line2?: string | null;
              city: string;
              state?: string | null;
              postalCode?: string | null;
              country?: string | null;
            }>;
          };
        };
      }>;
      pageInfo: {
        __typename?: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
        totalRecords: number;
      };
    };
    estimates: {
      __typename?: 'Estimate';
      low?: number | null;
      high?: number | null;
    };
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
  };
};

export type Get_All_SalesQueryVariables = Exact<{
  accountId: string;
  first?: InputMaybe<number>;
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleFilter>;
}>;

export type Get_All_SalesQuery = {
  __typename?: 'Query';
  sales: {
    __typename?: 'SaleConnection';
    edges: Array<{
      __typename?: 'SalesEdge';
      cursor: string;
      node: {
        __typename?: 'Sale';
        id: string;
        accountId: string;
        title?: string | null;
        description?: string | null;
        currency?: string | null;
        cursor: string;
        status: SaleStatus;
        closingMethod?: ClosingMethod | null;
        closingTimeCountdown: number;
        sequenceNumber: number;
        bastaBidClient: boolean;
        hidden: boolean;
        reserveAutoBidMethod: ReserveAutoBidMethod;
        type: SaleType;
        paddles: Array<{
          __typename?: 'Paddle';
          created: string;
          identifier: string;
          type: PaddleType;
          userId: string;
        }>;
        images: Array<{
          __typename?: 'Image';
          id: string;
          url: string;
          order: number;
        }>;
        items: {
          __typename?: 'SaleItemsConnection';
          pageInfo: {
            __typename: 'PageInfo';
            startCursor: string;
            endCursor: string;
            hasNextPage: boolean;
          };
          edges: Array<{
            __typename?: 'SaleItemsEdge';
            cursor: string;
            node: {
              __typename?: 'SaleItem';
              id: string;
              title?: string | null;
              totalBids: number;
              description?: string | null;
              currentBid?: number | null;
              leaderId?: string | null;
              saleId: string;
              reserve?: number | null;
              startingBid?: number | null;
              itemNumber: number;
              allowedBidTypes?: Array<BidType> | null;
              status: ItemStatus;
              hidden: boolean;
              nextAsks: Array<number>;
              reserveMet: boolean;
              reserveStatus: ReserveStatus;
              notifications: Array<
                | {
                    __typename: 'ItemFairWarningNotification';
                    id: string;
                    date: string;
                  }
                | {
                    __typename: 'ItemMessageNotification';
                    id: string;
                    message: string;
                    date: string;
                  }
              >;
              estimates: {
                __typename?: 'Estimate';
                low?: number | null;
                high?: number | null;
              };
              images: Array<{
                __typename?: 'Image';
                id: string;
                url: string;
                order: number;
              }>;
              bids: Array<{
                __typename?: 'Bid';
                bidId: string;
                saleId: string;
                amount: number;
                userId: string;
                date: string;
                bidStatus?: BidStatus | null;
                maxAmount: number;
                bidSequenceNumber: number;
                bidderIdentifier: string;
              }>;
              dates: {
                __typename?: 'ItemDates';
                openDate?: string | null;
                closingStart?: string | null;
                closingEnd?: string | null;
              };
            };
          }>;
        };
        incrementTable?: {
          __typename?: 'BidIncrementTable';
          rules: Array<{
            __typename?: 'RangeRule';
            highRange: number;
            lowRange: number;
            step: number;
          }>;
        } | null;
        dates: {
          __typename?: 'SaleDates';
          closingDate?: string | null;
          openDate?: string | null;
        };
        participants: {
          __typename?: 'ParticipantsConnection';
          totalCount: number;
          pageInfo: {
            __typename: 'PageInfo';
            startCursor: string;
            endCursor: string;
            hasNextPage: boolean;
          };
          edges: Array<{
            __typename?: 'ParticipantsEdge';
            cursor: string;
            node: { __typename?: 'Participant'; userId: string };
          }>;
        };
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      endCursor: string;
    };
  };
};

export type Get_SaleQueryVariables = Exact<{
  accountId: string;
  id: string;
  take?: InputMaybe<number>;
  cursor?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
}>;

export type Get_SaleQuery = {
  __typename?: 'Query';
  sale: {
    __typename?: 'Sale';
    id: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    cursor: string;
    status: SaleStatus;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
    sequenceNumber: number;
    images: Array<{
      __typename?: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
    items: {
      __typename?: 'SaleItemsConnection';
      edges: Array<{
        __typename?: 'SaleItemsEdge';
        cursor: string;
        node: {
          __typename?: 'SaleItem';
          id: string;
          title?: string | null;
          totalBids: number;
          description?: string | null;
          currentBid?: number | null;
          leaderId?: string | null;
          saleId: string;
          reserve?: number | null;
          reserveStatus: ReserveStatus;
          startingBid?: number | null;
          itemNumber: number;
          allowedBidTypes?: Array<BidType> | null;
          status: ItemStatus;
          nextAsks: Array<number>;
          reserveMet: boolean;
          hidden: boolean;
          notifications: Array<
            | {
                __typename: 'ItemFairWarningNotification';
                id: string;
                date: string;
              }
            | {
                __typename: 'ItemMessageNotification';
                id: string;
                message: string;
                date: string;
              }
          >;
          estimates: {
            __typename?: 'Estimate';
            low?: number | null;
            high?: number | null;
          };
          images: Array<{
            __typename?: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename?: 'Bid';
            bidId: string;
            saleId: string;
            amount: number;
            userId: string;
            date: string;
            bidStatus?: BidStatus | null;
            maxAmount: number;
            bidSequenceNumber: number;
            bidderIdentifier: string;
          }>;
          dates: {
            __typename?: 'ItemDates';
            openDate?: string | null;
            closingStart?: string | null;
            closingEnd?: string | null;
          };
        };
      }>;
    };
    incrementTable?: {
      __typename?: 'BidIncrementTable';
      rules: Array<{
        __typename?: 'RangeRule';
        highRange: number;
        lowRange: number;
        step: number;
      }>;
    } | null;
    dates: {
      __typename?: 'SaleDates';
      closingDate?: string | null;
      openDate?: string | null;
    };
    participants: {
      __typename?: 'ParticipantsConnection';
      totalCount: number;
      edges: Array<{
        __typename?: 'ParticipantsEdge';
        cursor: string;
        node: { __typename?: 'Participant'; userId: string };
      }>;
    };
  };
};

export type Get_All_LogsQueryVariables = Exact<{
  accountId: string;
  first?: InputMaybe<number>;
  after?: InputMaybe<string>;
  filter?: InputMaybe<ActionHookFilter>;
}>;

export type Get_All_LogsQuery = {
  __typename?: 'Query';
  actionHookLogs: {
    __typename?: 'ActionHookLogConnection';
    edges: Array<{
      __typename?: 'ActionHookLogEdge';
      cursor: string;
      node: {
        __typename?: 'ActionHookLog';
        id: string;
        accountId: string;
        action: ActionType;
        url: string;
        requestPayload: string;
        idempotencyKey: string;
        status?: ActionHookStatus | null;
        error?: string | null;
        retries?: number | null;
        createdAt?: string | null;
        executedAt?: string | null;
        headers?: Array<{
          __typename?: 'HttpHeader';
          key: string;
          value: string;
        } | null> | null;
      };
    }>;
  };
};

export type Get_Hook_SubscriptionQueryVariables = Exact<{
  accountId: string;
}>;

export type Get_Hook_SubscriptionQuery = {
  __typename?: 'Query';
  actionHookSubscriptions: Array<{
    __typename?: 'ActionHookSubscription';
    accountId: string;
    action: ActionType;
    url: string;
    headers?: Array<{
      __typename?: 'HttpHeader';
      key: string;
      value: string;
    } | null> | null;
  }>;
};
