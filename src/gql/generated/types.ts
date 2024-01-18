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

/** Account Information */
export type Account = {
  __typename?: 'Account';
  /** Basta Bid Client */
  bastaBidClient: boolean;
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
  /** Event: When bid on any item associated with your account occurs in the system. */
  BidOnItem = 'BID_ON_ITEM',
  /** Event: When an item status change associated with your account occurs in the system. */
  ItemsStatusChanged = 'ITEMS_STATUS_CHANGED',
  /** Event: When a sale status change associated with your account occurs in the system. */
  SaleStatusChanged = 'SALE_STATUS_CHANGED',
}

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
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Item id of the item that you are adding to the sale. */
  itemId: string;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<number>;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<number>;
};

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

/** A bid is either succesful or there was an error */
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
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Default if ClosingMethod is not specified.
   */
  Overlapping = 'OVERLAPPING',
}

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
  itemId: string;
  order: number;
  url: string;
};

/** Item input when creating an item */
export type CreateItemInput = {
  /** Description for describing the item */
  description?: InputMaybe<string>;
  /** Title for describing the item */
  title: string;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<number>;
  /** Valuation currency */
  valuationCurrency?: InputMaybe<string>;
};

/** Input for creating or modifying sales. */
export type CreateSaleInput = {
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  closingMethod?: InputMaybe<ClosingMethod>;
  closingTimeCountdown?: InputMaybe<number>;
  currency?: InputMaybe<string>;
  dates?: InputMaybe<SaleDatesInput>;
  description?: InputMaybe<string>;
  themeType?: InputMaybe<number>;
  title?: InputMaybe<string>;
};

/** Input to delete an Action Hook subscription. */
export type DeleteActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
};

/** Delete item image input */
export type DeleteItemImageInput = {
  imageId: string;
  itemId: string;
};

/** Input object for when deleting a item (including unassociating from a sale) */
export type DeleteItemInput = {
  itemId: string;
};

/** Input object for when deleting a sale. */
export type DeleteSaleInput = {
  saleId: string;
};

export type GetItemInput = {
  __typename?: 'GetItemInput';
  itemId?: Maybe<string>;
};

export type GetItemsInput = {
  after?: InputMaybe<string>;
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
  imageId: string;
  order: number;
};

export type Item = {
  __typename?: 'Item';
  /** Item description */
  description?: Maybe<string>;
  /** Id of an item. */
  id: string;
  /** Images attached to item */
  images: Array<Image>;
  /** Sale Id, if the item is linked to a sale */
  saleId?: Maybe<string>;
  /** Item title */
  title?: Maybe<string>;
  /** Valuation of the item in minor currency units. */
  valuationAmount?: Maybe<number>;
  /** Valuation currency */
  valuationCurrency?: Maybe<string>;
};

export type ItemDates = {
  __typename?: 'ItemDates';
  closingEnd?: Maybe<string>;
  closingStart?: Maybe<string>;
};

/** Item filter */
export type ItemFilter = {
  /** Filter by item title */
  title?: InputMaybe<string>;
};

export type ItemNumberChangeInput = {
  itemId: string;
  itemNumber: number;
};

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
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
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
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
  /** Add a currently existing item to a sale. */
  addItemToSale: SaleItem;
  /** Bid on behalf of a user */
  bidOnBehalf: Bid;
  /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
  cancelLatestBidOnItem: CanceledLatestBidOnItem;
  /** Close a sale, non forcefully. */
  closeSale: Sale;
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
  /** Create a sale */
  createSale: Sale;
  /**
   * Will replace createBidderToken(accountId: String!, input: BidderTokenInput!): BidderToken!
   * Only accessible for SDK users at the moment
   */
  createUserTokenV2: UserToken;
  /** Delete action hook subscription */
  deleteActionHookSubscription: boolean;
  /**
   * Delete item image.
   * Method only available through admin.
   */
  deleteItemImage: Array<Image>;
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
  /** Publish a sale, forcefully. */
  publishSale: Sale;
  /** Remove an item from the sale. This will not delete the item completely. */
  removeItemFromSale: Sale;
  /**
   * Reorder item images.
   * Method only available through admin.
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
  /** Sets sale item winner. Marks bid as won and closes item. Used in offer model. */
  setItemWinner: SaleItem;
  /** Sets sale item status. Used in offer model to close item with no winner. */
  setSaleItemStatus: SaleItem;
  /** Start to close the sale, non forcefully */
  startClosingSale: Sale;
  /** Test ActionHook configuration. This will trigger an action hook to be sent. */
  testActionHook: TestActionHookResponse;
  /** Update Account */
  updateAccount: Account;
  /** Update action hook subscription */
  updateActionHookSubscription: ActionHookSubscription;
  /** Update item. This will update information about items for all sales that has not been closed. */
  updateItem: Item;
  /** Update item associated with a sale. */
  updateItemForSale: SaleItem;
  /** Update ItemNumbers input */
  updateItemNumbers: Sale;
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

export type MutationAddItemToSaleArgs = {
  accountId: string;
  input: AddItemToSaleInput;
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

export type MutationCreateSaleArgs = {
  accountId: string;
  input: CreateSaleInput;
};

export type MutationCreateUserTokenV2Args = {
  accountId: string;
  input: UserTokenInput;
};

export type MutationDeleteActionHookSubscriptionArgs = {
  accountId: string;
  input: DeleteActionHookSubscriptionInput;
};

export type MutationDeleteItemImageArgs = {
  accountId: string;
  input: DeleteItemImageInput;
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

export type MutationPublishSaleArgs = {
  accountId: string;
  input: PublishSaleInput;
};

export type MutationRemoveItemFromSaleArgs = {
  accountId: string;
  input: RemoveSaleItemInput;
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

export type MutationSetItemWinnerArgs = {
  accountId: string;
  input: SetItemWinnerInput;
};

export type MutationSetSaleItemStatusArgs = {
  accountId: string;
  input: SetSaleItemStatusInput;
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

export type MutationUpdateItemArgs = {
  accountId: string;
  input: UpdateItemInput;
  itemId: string;
};

export type MutationUpdateItemForSaleArgs = {
  accountId: string;
  input: UpdateSaleItemInput;
  itemId: string;
};

export type MutationUpdateItemNumbersArgs = {
  accountId: string;
  input: UpdateItemNumbersInput;
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
  refreshUrl: string;
  returnUrl: string;
  sellerLocation: SellerLocation;
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

/** Page info for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Ending cursor */
  endCursor: string;
  /** Has next page */
  hasNextPage: boolean;
  /** Starting cursor */
  startCursor: string;
};

/** Direction of pagination */
export enum PaginationDirection {
  Backwards = 'BACKWARDS',
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

export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  /** External account id from payment provider */
  paymentProviderAccountId: string;
  /** Payment Setup Status */
  status: PaymentProviderStatus;
};

export enum PaymentProviderStatus {
  /** Account has finished onboarding for payment provider and details are being processed. */
  Processing = 'PROCESSING',
  /** Account has finished onboarding and details have been processed and confirmed. */
  Ready = 'READY',
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
  /** Get all sales that have been created. */
  sales: SaleConnection;
  salesAggregate: SalesAggregate;
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
  first?: InputMaybe<number>;
  itemsFilter: ItemsFilter;
};

export type QuerySaleArgs = {
  accountId: string;
  id: string;
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

/** Input to remove an item from a sale */
export type RemoveSaleItemInput = {
  /** Item id of the item that you are removing from the sale. */
  itemId: string;
  /** Id of the sale that is associated with the item. */
  saleId: string;
};

export type ReorderItemImages = {
  imageOrderChanges: Array<ImageOrderInput>;
  itemId: string;
};

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
  /** Sale Dates */
  dates: SaleDates;
  /** Sale Description */
  description?: Maybe<string>;
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
  /** Items that have been associated with this sale. */
  items: SaleItemsConnection;
  /** Get list of participants for this sale */
  participants: ParticipantsConnection;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Sale status */
  status: SaleStatus;
  /**
   * Sale theme type.
   * Only used for sales owned by basta
   */
  themeType?: Maybe<number>;
  /** Sale Title */
  title?: Maybe<string>;
};

/** Sale */
export type SaleItemsArgs = {
  after?: InputMaybe<string>;
  first?: InputMaybe<number>;
};

/** Sale */
export type SaleParticipantsArgs = {
  cursor?: InputMaybe<string>;
  direction?: InputMaybe<PaginationDirection>;
  take?: InputMaybe<number>;
};

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
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: Maybe<string>;
};

/** Input arguments for when creating or modifying a sale. */
export type SaleDatesInput = {
  /** Closing Date */
  closingDate?: InputMaybe<string>;
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
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: Maybe<Array<BidType>>;
  /** Get list of bids for this item */
  bids: Array<Bid>;
  /** Current bid amount for the item as minor currency unit. */
  currentBid?: Maybe<number>;
  /** Scheduled closing timestamp for the item. */
  dates: ItemDates;
  /** Item description */
  description?: Maybe<string>;
  /** High Estimate of item in minor currency unit. */
  highEstimate: number;
  /** Id of an item. */
  id: string;
  /** Images attached to saleItem */
  images: Array<Image>;
  /** Item number */
  itemNumber: number;
  /** Current leader (user id) for the item */
  leaderId?: Maybe<string>;
  /** Low Estimate of item in minor currency unit. */
  lowEstimate: number;
  /** Reserve on the item in minor currency unit. */
  reserve?: Maybe<number>;
  /** Sale id, as items can be created without having to be associated to a sale. */
  saleId: string;
  /** Starting bid for the item in minor currency unit. */
  startingBid?: Maybe<number>;
  /** Status of the item */
  status: ItemStatus;
  /** Item title */
  title?: Maybe<string>;
  /** Number of bids that have been placed on the item */
  totalBids: number;
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
  /** Description for describing the item */
  description?: InputMaybe<string>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
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
  /** Title for describing the item */
  title: string;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<number>;
  /** Valuationo currency */
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

export enum SellerLocation {
  /** Sellers located in iceland */
  Is = 'IS',
  /** Sellers located in the united states */
  Us = 'US',
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

/** Input to change the status of an item. */
export type SetSaleItemStatusInput = {
  itemId: string;
  saleId: string;
  status: ItemStatus;
};

/** Input object for when starting to close a sale. */
export type StartClosingSaleInput = {
  saleId: string;
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
  /** Time to live of the bidders token, represented minutes. */
  ttl: number;
  /** Unique User ID that represents a user in customer's user database. */
  userId: string;
};

/**
 * Update Account properties.
 * All values in object are used to override current Account properties.
 */
export type UpdateAccountInput = {
  /** description to be displayed on account profile as bio */
  description?: InputMaybe<string>;
  /** email */
  email: string;
  /** handle */
  handle: string;
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

/** Item input when modifying an item */
export type UpdateItemInput = {
  description?: InputMaybe<string>;
  title?: InputMaybe<string>;
  valuationAmount?: InputMaybe<number>;
  valuationCurrency?: InputMaybe<string>;
};

export type UpdateItemNumbersInput = {
  itemNumberChanges: Array<ItemNumberChangeInput>;
  saleId: string;
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
  dates: SaleDatesInput;
  description: string;
  themeType?: InputMaybe<number>;
  title: string;
};

/** Update SaleItem input when modifying an item */
export type UpdateSaleItemInput = {
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /** Description for describing the item */
  description?: InputMaybe<string>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<number>;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<number>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<number>;
  /** Id of the sale that is associated with the item. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<number>;
  /** Title for describing the item */
  title: string;
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<number>;
  /** Valuation currency in minor currency unit. */
  valuationCurrency?: InputMaybe<string>;
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
    reserve?: number | null;
    startingBid?: number | null;
    status: ItemStatus;
    lowEstimate: number;
    highEstimate: number;
    itemNumber: number;
    allowedBidTypes?: Array<BidType> | null;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    dates: {
      __typename?: 'ItemDates';
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
    reserve?: number | null;
    startingBid?: number | null;
    status: ItemStatus;
    lowEstimate: number;
    highEstimate: number;
    itemNumber: number;
    allowedBidTypes?: Array<BidType> | null;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    dates: {
      __typename?: 'ItemDates';
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
    saleId?: string | null;
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
    images: Array<{
      __typename?: 'Image';
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
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
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
          lowEstimate: number;
          highEstimate: number;
          itemNumber: number;
          allowedBidTypes?: Array<BidType> | null;
          status: ItemStatus;
          images: Array<{
            __typename?: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename?: 'Bid';
            bidId: string;
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
  itemId: string;
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
    lowEstimate: number;
    highEstimate: number;
    itemNumber: number;
    allowedBidTypes?: Array<BidType> | null;
    bids: Array<{
      __typename?: 'Bid';
      bidId: string;
      amount: number;
      maxAmount: number;
      userId: string;
      date: string;
      bidStatus?: BidStatus | null;
      bidSequenceNumber: number;
      bidderIdentifier: string;
    }>;
    dates: {
      __typename?: 'ItemDates';
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
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
    saleId?: string | null;
    images: Array<{
      __typename?: 'Image';
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
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
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
          lowEstimate: number;
          highEstimate: number;
          itemNumber: number;
          images: Array<{
            __typename: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename: 'Bid';
            bidId: string;
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

export type Publish_SaleMutationVariables = Exact<{
  accountId: string;
  input: PublishSaleInput;
}>;

export type Publish_SaleMutation = {
  __typename?: 'Mutation';
  publishSale: {
    __typename: 'Sale';
    id: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod?: ClosingMethod | null;
    closingTimeCountdown: number;
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
          lowEstimate: number;
          highEstimate: number;
          itemNumber: number;
          images: Array<{
            __typename: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename: 'Bid';
            bidId: string;
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
        title?: string | null;
        description?: string | null;
        valuationAmount?: number | null;
        valuationCurrency?: string | null;
        saleId?: string | null;
        images: Array<{
          __typename?: 'Image';
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
    description?: string | null;
    title?: string | null;
    valuationAmount?: number | null;
    valuationCurrency?: string | null;
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
              lowEstimate: number;
              highEstimate: number;
              itemNumber: number;
              allowedBidTypes?: Array<BidType> | null;
              status: ItemStatus;
              images: Array<{
                __typename?: 'Image';
                id: string;
                url: string;
                order: number;
              }>;
              bids: Array<{
                __typename?: 'Bid';
                bidId: string;
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
          startingBid?: number | null;
          lowEstimate: number;
          highEstimate: number;
          itemNumber: number;
          allowedBidTypes?: Array<BidType> | null;
          status: ItemStatus;
          images: Array<{
            __typename?: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename?: 'Bid';
            bidId: string;
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
