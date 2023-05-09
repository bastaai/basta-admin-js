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
};

/** Account Information */
export type Account = {
  __typename?: 'Account';
  /** created */
  created: Scalars['String'];
  /** createdByUser */
  createdByUserID: Scalars['String'];
  /** description */
  description?: Maybe<Scalars['String']>;
  /** Contact email address */
  email: Scalars['String'];
  /** account handle, identifier for the account */
  handle?: Maybe<Scalars['String']>;
  /** ID of the account */
  id: Scalars['ID'];
  /** account image url */
  imageUrl?: Maybe<Scalars['String']>;
  /** account description (bio) */
  links: Array<Link>;
  /** modified */
  modified?: Maybe<Scalars['String']>;
  /** modifiedByUserID */
  modifiedByUserID?: Maybe<Scalars['String']>;
  /** Name of the account */
  name: Scalars['String'];
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
export type ActionHookLog = Node & {
  __typename?: 'ActionHookLog';
  /** Account identifier. */
  accountId: Scalars['String'];
  /** Action triggering the Action Hook. */
  action: ActionType;
  /** Log creation timestamp. */
  createdAt?: Maybe<Scalars['String']>;
  /** Error message returned by receiver. */
  error?: Maybe<Scalars['String']>;
  /** Latest request execution timestamp. */
  executedAt?: Maybe<Scalars['String']>;
  /** Headers sent with the Action Hook request. */
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  /** Action Hook log entry identifier. */
  id: Scalars['ID'];
  /** Response from Action Hook receiver. */
  response?: Maybe<Scalars['String']>;
  /** Number of HTTP request retries. */
  retries?: Maybe<Scalars['Int']>;
  /** Status of the Action Hook request. */
  status?: Maybe<ActionHookStatus>;
  /** Action Hook receiver endpoint. */
  url: Scalars['String'];
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
  cursor: Scalars['String'];
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
  accountId: Scalars['String'];
  /** Name of the basta action that is being subscribed to. */
  action: ActionType;
  /** Custom HTTP header values sent with the action Action Hook. */
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  /** Action Hook receiver endpoint. */
  url: Scalars['String'];
};

/** Input to create an Action Hook subscription. */
export type ActionHookSubscriptionInput = {
  /** Events that trigger the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: InputMaybe<Array<InputMaybe<HttpHeaderInput>>>;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: Scalars['String'];
};

/** Action types (events) that can trigger Action Hooks. */
export enum ActionType {
  /** Event: When bid on any item associated with your account occurs in the system. */
  BidOnItem = 'BID_ON_ITEM',
  /** Event: When an item status change associated with your account occurs in the system. */
  ItemsStatusChanged = 'ITEMS_STATUS_CHANGED',
  /** Event: When 1 or more item in a sale change associated with your account. */
  ItemsUpdated = 'ITEMS_UPDATED',
  /** Event: When a sale status change associated with your account occurs in the system. */
  SaleStatusChanged = 'SALE_STATUS_CHANGED',
}

/** Add a current item to a sale. */
export type AddItemToSaleInput = {
  /** Item number is used to order items (optional) */
  ItemNumber?: InputMaybe<Scalars['Int']>;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<Scalars['Int']>;
  /** Item id of the item that you are adding to the sale. */
  itemId: Scalars['String'];
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<Scalars['Int']>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<Scalars['Int']>;
  /** Id of the sale that is associated with the item. */
  saleId: Scalars['String'];
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<Scalars['Int']>;
};

/**
 * API token represent a token that allows
 * customers to access the API in machine and machine manner.
 */
export type ApiToken = Node & {
  __typename?: 'ApiToken';
  accountId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  roles: Array<ApiTokenRole>;
};

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
  generatedApiKey: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  roles: Array<ApiTokenRole>;
};

/** Input object for when creating a API token */
export type ApiTokenInput = {
  /** Name of the API token */
  name: Scalars['String'];
  /** Role associated to API token */
  role: Array<ApiTokenRole>;
};

/** Role that authorize api tokens */
export enum ApiTokenRole {
  /** ADMIN HAS UNRESTRICTED ACCESS */
  Admin = 'ADMIN',
  /** READ HAS READ ONLY ACCESS */
  Read = 'READ',
}

export type ApiTokensEdge = {
  __typename?: 'ApiTokensEdge';
  /** Current cursor */
  cursor: Scalars['String'];
  /** Current node */
  node: ApiToken;
};

/** A bid on a item */
export type Bid = {
  __typename?: 'Bid';
  /** Amount of the bid in minor currency unit. */
  amount: Scalars['Int'];
  /** BidId UUID string */
  bidId: Scalars['String'];
  /**
   * Bids sequence number tells us how bids are connected.
   * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
   * Mainly used for cancelling bids.
   */
  bidSequenceNumber: Scalars['Int'];
  /** Bid status of currently logged in user for this item */
  bidStatus?: Maybe<BidStatus>;
  /** Date of when the bid was placed. */
  date: Scalars['String'];
  /** Max amount of the bid in minor currency unit. */
  maxAmount: Scalars['Int'];
  /** Users id that placed the bid */
  userId: Scalars['String'];
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
  amount: Scalars['Int'];
  /** item id of the item */
  itemId: Scalars['String'];
  /** The sale id which the item belongs that is being bidded on */
  saleId: Scalars['String'];
  /** The type represent what kind of bid is being placed on an item. */
  type: BidType;
  /** user id of the user that bid is being placed for. */
  userId: Scalars['String'];
};

/** BidOnItemInput. A bid can be NormalBid, MaxBid or Offer */
export type BidOnItemInput = {
  /**
   * Amount should be given in minor currency unit for the currency selected for the sale.
   * In USD that would be cents. A bid of $100 should have the amount set as the integer 10_000
   */
  amount: Scalars['Int'];
  /** The type of bid being placed. Must be part of item's allowedBids property. */
  bidType: BidType;
  /** ItemId */
  itemId: Scalars['String'];
  /** SaleId for the item */
  saleId: Scalars['String'];
  /**
   * UserId of the bid owner.
   * Important that this is the unique userId of the user who is performing the bid in your system.
   */
  userId: Scalars['String'];
};

/** A bid is either succesful or there was an error */
export type BidPlaced = BidPlacedError | BidPlacedSuccess;

/** Error response for bidOnItem */
export type BidPlacedError = {
  __typename?: 'BidPlacedError';
  /** Error description. */
  error: Scalars['String'];
  /** Error code if an error occured. */
  errorCode: BidErrorCode;
};

/** Bid was successfully placed */
export type BidPlacedSuccess = {
  __typename?: 'BidPlacedSuccess';
  /** Amount of placed bid. Minor currency units. */
  amount: Scalars['Int'];
  /** Bid Status of the bid */
  bidStatus: BidStatus;
  /** BidType */
  bidType: BidType;
  /** Server time of when the bid was recorded. */
  date: Scalars['String'];
  /**
   * MaxAmount, only set if bid was of type MaxBid.
   * Should be kept secret and never rendered to clients.
   */
  maxAmount: Scalars['Int'];
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
  expiration: Scalars['String'];
  token: Scalars['String'];
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
  cursor: Scalars['String'];
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
  itemId: Scalars['String'];
  /** Sale ID of the sale that includes the item in scope. */
  saleId: Scalars['String'];
  /** Bid sequence number of the latest bid. */
  sequenceNumber: Scalars['Int'];
};

/** Response when canceling latest bid on item */
export type CanceledLatestBidOnItem = {
  __typename?: 'CanceledLatestBidOnItem';
  removedBids: Array<Bid>;
};

/** Input object for when forcing sale to close. */
export type CloseSaleInput = {
  saleId: Scalars['String'];
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
  description?: InputMaybe<Scalars['String']>;
  /** email */
  email: Scalars['String'];
  /**
   * identifier for the account
   * If provided then it has to between 3-20 charachters long.
   * Autogenerated if left empty.
   * Accepted symbols for handles:
   *   * lowercase alphabetical letters a-z
   *   * numbers 0-9
   *   * special charachter _ (underscore)
   */
  handle?: InputMaybe<Scalars['String']>;
  /** links associated with the account */
  links?: InputMaybe<Array<InputMaybe<LinkInput>>>;
  /** name */
  name: Scalars['String'];
};

/** Item input when creating an item */
export type CreateItemInput = {
  /** Description for describing the item */
  description?: InputMaybe<Scalars['String']>;
  /** Title for describing the item */
  title: Scalars['String'];
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<Scalars['Int']>;
  /** Valuation currency */
  valuationCurrency?: InputMaybe<Scalars['String']>;
};

/** Input for creating or modifying sales. */
export type CreateSaleInput = {
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  closingMethod?: InputMaybe<ClosingMethod>;
  closingTimeCountdown?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  dates?: InputMaybe<SaleDatesInput>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Input to delete an Action Hook subscription. */
export type DeleteActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
};

/** Input object for when deleting a item (including unassociating from a sale) */
export type DeleteItemInput = {
  itemId: Scalars['String'];
};

/** Input object for when deleting a sale. */
export type DeleteSaleInput = {
  saleId: Scalars['String'];
};

export type GetItemInput = {
  __typename?: 'GetItemInput';
  itemId?: Maybe<Scalars['String']>;
};

export type GetItemsInput = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  itemsFilter: ItemsFilter;
  userId?: InputMaybe<Scalars['String']>;
};

/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export type HttpHeader = {
  __typename?: 'HttpHeader';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Input to include custom header key-value pairs with Action Hook requests. */
export type HttpHeaderInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Image object */
export type Image = {
  __typename?: 'Image';
  /** ID of the image, UUID string */
  id: Scalars['String'];
  /** DisplayOrder for image */
  order: Scalars['Int'];
  /** Image URL */
  url: Scalars['String'];
};

export type Item = Node & {
  __typename?: 'Item';
  /** Item description */
  description?: Maybe<Scalars['String']>;
  /** Id of an item. */
  id: Scalars['ID'];
  /** Images attached to item */
  images: Array<Image>;
  /** Sale Id, if the item is linked to a sale */
  saleId?: Maybe<Scalars['String']>;
  /** Item title */
  title?: Maybe<Scalars['String']>;
  /** Valuation of the item in minor currency units. */
  valuationAmount?: Maybe<Scalars['Int']>;
  /** Valuation currency */
  valuationCurrency?: Maybe<Scalars['String']>;
};

export type ItemDates = {
  __typename?: 'ItemDates';
  closingEnd?: Maybe<Scalars['String']>;
  closingStart?: Maybe<Scalars['String']>;
};

/** Item filter */
export type ItemFilter = {
  /** Filter by item title */
  title?: InputMaybe<Scalars['String']>;
};

export type ItemNumberChangeInput = {
  itemId: Scalars['String'];
  itemNumber: Scalars['Int'];
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
  cursor: Scalars['String'];
  /** Item node */
  node: Item;
};

export type ItemsFilter = {
  onlyMyItems: Scalars['Boolean'];
  title?: InputMaybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  type: LinkType;
  url: Scalars['String'];
};

export type LinkInput = {
  type: LinkType;
  url: Scalars['String'];
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
  itemId: Scalars['String'];
  /** max bid amount of the bid in minor currency unit. */
  maxAmount: Scalars['Int'];
  /** The sale id which the item belongs that is being bidded on */
  saleId: Scalars['String'];
  /** user id of the user that bid is being placed for. */
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add action hook subscription */
  addActionHookSubscription: ActionHookSubscription;
  /** Add a currently existing item to a sale. */
  addItemToSale: SaleItem;
  /** Bid on behalf of a user */
  bidOnBehalf: Bid;
  /**
   * Endpoint only available to SDK users.
   * Place bid on an item for some amount. Can be of type NORMAL, MAX and OFFER.
   * Amount will be the MaxAmount when bid is of type MAX and OfferAmount for bids of type OFFER.
   */
  bidOnItemV2: BidPlaced;
  /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
  cancelLatestBidOnItem: CanceledLatestBidOnItem;
  /** Close a sale, non forcefully. */
  closeSale: Sale;
  /** Create Account */
  createAccount: Account;
  /** Create an API key, that can access all functions in the API on behalf of the logged in customer. */
  createApiToken: ApiTokenCreated;
  /** Create and sign a token that can be used to bid on behalf of a user (unique user id needs to be provided) */
  createBidderToken: BidderToken;
  /** Create item. This operation will create a standalone item that is not part of a sale. */
  createItem: Item;
  /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
  createItemForSale: SaleItem;
  /** Create a sale */
  createSale: Sale;
  /**
   * Will replace createBidderToken(accountId: String!, input: BidderTokenInput!): BidderToken!
   * Only accessible for SDK users at the moment
   */
  createUserTokenV2: UserToken;
  /** Delete action hook subscription */
  deleteActionHookSubscription: Scalars['Boolean'];
  /** Close a sale, forcefully. */
  forceCloseSale: Sale;
  /** Open a sale, forcefully. */
  forceOpenSale: Sale;
  /** Start to close the sale, forcefully */
  forceStartClosingSale: Sale;
  /**
   * Max bid on behalf of a user
   * @deprecated(reason: "Use bidOnBehalf with type as MAX")
   */
  maxBidOnBehalf: Bid;
  /** Open a sale, non forcefully. */
  openSale: Sale;
  /** Publish a sale, forcefully. */
  publishSale: Sale;
  /** Remove an item from the sale. This will not delete the item completely. */
  removeItemFromSale: Sale;
  /** Revoke the API key by id. */
  revokeApiToken: Scalars['Boolean'];
  /** Sets sale item winner. Marks bid as won and closes item. Used in offer model. */
  setItemWinner: SaleItem;
  /** Sets sale item status. Used in offer model to close item with no winner. */
  setSaleItemStatus: SaleItem;
  /** Start to close the sale, non forcefully */
  startClosingSale: Sale;
  /** Test ActionHook configuration. This will trigger an action hook to be sent. */
  testActionHook: TestActionHookResponse;
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

export type MutationAddActionHookSubscriptionArgs = {
  accountId: Scalars['String'];
  input: ActionHookSubscriptionInput;
};

export type MutationAddItemToSaleArgs = {
  accountId: Scalars['String'];
  input: AddItemToSaleInput;
};

export type MutationBidOnBehalfArgs = {
  accountId: Scalars['String'];
  input: BidOnBehalfInput;
};

export type MutationBidOnItemV2Args = {
  accountId: Scalars['String'];
  input: BidOnItemInput;
};

export type MutationCancelLatestBidOnItemArgs = {
  accountId: Scalars['String'];
  input: CancelLatestBidOnItemInput;
};

export type MutationCloseSaleArgs = {
  accountId: Scalars['String'];
  input: CloseSaleInput;
};

export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};

export type MutationCreateApiTokenArgs = {
  accountId: Scalars['String'];
  input: ApiTokenInput;
};

export type MutationCreateBidderTokenArgs = {
  accountId: Scalars['String'];
  input: BidderTokenInput;
};

export type MutationCreateItemArgs = {
  accountId: Scalars['String'];
  input: CreateItemInput;
};

export type MutationCreateItemForSaleArgs = {
  accountId: Scalars['String'];
  input: SaleItemInput;
};

export type MutationCreateSaleArgs = {
  accountId: Scalars['String'];
  input: CreateSaleInput;
};

export type MutationCreateUserTokenV2Args = {
  accountId: Scalars['String'];
  input: UserTokenInput;
};

export type MutationDeleteActionHookSubscriptionArgs = {
  accountId: Scalars['String'];
  input: DeleteActionHookSubscriptionInput;
};

export type MutationForceCloseSaleArgs = {
  accountId: Scalars['String'];
  input: CloseSaleInput;
};

export type MutationForceOpenSaleArgs = {
  accountId: Scalars['String'];
  input: OpenSaleInput;
};

export type MutationForceStartClosingSaleArgs = {
  accountId: Scalars['String'];
  input: StartClosingSaleInput;
};

export type MutationMaxBidOnBehalfArgs = {
  accountId: Scalars['String'];
  input: MaxBidOnBehalfInput;
};

export type MutationOpenSaleArgs = {
  accountId: Scalars['String'];
  input: OpenSaleInput;
};

export type MutationPublishSaleArgs = {
  accountId: Scalars['String'];
  input: PublishSaleInput;
};

export type MutationRemoveItemFromSaleArgs = {
  accountId: Scalars['String'];
  input: RemoveSaleItemInput;
};

export type MutationRevokeApiTokenArgs = {
  accountId: Scalars['String'];
  input: RevokeApiTokenInput;
};

export type MutationSetItemWinnerArgs = {
  accountId: Scalars['String'];
  input: SetItemWinnerInput;
};

export type MutationSetSaleItemStatusArgs = {
  accountId: Scalars['String'];
  input: SetSaleItemStatusInput;
};

export type MutationStartClosingSaleArgs = {
  accountId: Scalars['String'];
  input: StartClosingSaleInput;
};

export type MutationTestActionHookArgs = {
  accountId: Scalars['String'];
  input: ActionHookSubscriptionInput;
};

export type MutationUpdateActionHookSubscriptionArgs = {
  accountId: Scalars['String'];
  input: UpdateActionHookSubscriptionInput;
};

export type MutationUpdateItemArgs = {
  accountId: Scalars['String'];
  input: UpdateItemInput;
  itemId: Scalars['String'];
};

export type MutationUpdateItemForSaleArgs = {
  accountId: Scalars['String'];
  input: UpdateSaleItemInput;
  itemId: Scalars['String'];
};

export type MutationUpdateItemNumbersArgs = {
  accountId: Scalars['String'];
  input: UpdateItemNumbersInput;
};

export type MutationUpdateSaleArgs = {
  accountId: Scalars['String'];
  input: UpdateSaleInput;
  saleId: Scalars['String'];
};

export type Node = {
  /** Identification of the node. */
  id: Scalars['ID'];
};

/** Input object for when forcing sale to open. */
export type OpenSaleInput = {
  saleId: Scalars['String'];
};

/** Page info for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Ending cursor */
  endCursor: Scalars['ID'];
  /** Has next page */
  hasNextPage: Scalars['Boolean'];
  /** Starting cursor */
  startCursor: Scalars['ID'];
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
  userId: Scalars['String'];
};

export type ParticipantsConnection = {
  __typename?: 'ParticipantsConnection';
  edges: Array<ParticipantsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ParticipantsEdge = {
  __typename?: 'ParticipantsEdge';
  cursor: Scalars['String'];
  node: Participant;
};

export enum Permission {
  ReadAccount = 'READ_ACCOUNT',
  ReadActionHooks = 'READ_ACTION_HOOKS',
  ReadApiTokens = 'READ_API_TOKENS',
  ReadItem = 'READ_ITEM',
  ReadSale = 'READ_SALE',
  WriteAccount = 'WRITE_ACCOUNT',
  WriteActionHooks = 'WRITE_ACTION_HOOKS',
  WriteApiTokens = 'WRITE_API_TOKENS',
  WriteBidderToken = 'WRITE_BIDDER_TOKEN',
  WriteCancelBid = 'WRITE_CANCEL_BID',
  WriteItem = 'WRITE_ITEM',
  WriteSale = 'WRITE_SALE',
}

/** Input object for when forcing sale to published. */
export type PublishSaleInput = {
  saleId: Scalars['String'];
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
  accountId: Scalars['String'];
};

export type QueryActionHookLogsArgs = {
  accountId: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ActionHookFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryActionHookSubscriptionsArgs = {
  accountId: Scalars['String'];
};

export type QueryApiTokensArgs = {
  accountId: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryItemArgs = {
  accountId: Scalars['String'];
  itemId: Scalars['String'];
};

export type QueryItemsArgs = {
  accountId: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  itemsFilter: ItemsFilter;
};

export type QuerySaleArgs = {
  accountId: Scalars['String'];
  id: Scalars['ID'];
};

export type QuerySalesArgs = {
  accountId: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SaleFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QuerySalesAggregateArgs = {
  accountId: Scalars['String'];
};

/**
 * Range rule explains increments in the table.
 * Represented as minor currency units.
 */
export type RangeRule = {
  __typename?: 'RangeRule';
  /** High range of the rule */
  highRange: Scalars['Int'];
  /** Low range of the rule */
  lowRange: Scalars['Int'];
  /** Step of the rule */
  step: Scalars['Int'];
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
  highRange: Scalars['Int'];
  /** Low range of the rule in minor currency units. */
  lowRange: Scalars['Int'];
  /** Step of the rule in minor currency units. */
  step: Scalars['Int'];
};

/** Input to remove an item from a sale */
export type RemoveSaleItemInput = {
  /** Item id of the item that you are removing from the sale. */
  itemId: Scalars['String'];
  /** Id of the sale that is associated with the item. */
  saleId: Scalars['String'];
};

/** Input object for when revoking a API token */
export type RevokeApiTokenInput = {
  /** API token Id that needs to be revoked */
  apiTokenId: Scalars['String'];
};

/** Sale */
export type Sale = Node & {
  __typename?: 'Sale';
  /** Account ID associated with the sale */
  accountId: Scalars['String'];
  /** Chosen ClosingMethod */
  closingMethod?: Maybe<ClosingMethod>;
  /**
   * ClosingTime countdown is the sniping duration in milliseconds.
   * If not provided it defaults to 120000 (2 minutes).
   * If a sale has an OVERLAPPING closing method it also assigns the item's closing time in asceding order.
   */
  closingTimeCountdown: Scalars['Int'];
  /** Currency of the sale (capital letters: EUR, USD, etc.) */
  currency?: Maybe<Scalars['String']>;
  /** Sale Dates */
  dates: SaleDates;
  /** Sale Description */
  description?: Maybe<Scalars['String']>;
  /** Id of a sale. */
  id: Scalars['ID'];
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
  sequenceNumber: Scalars['Int'];
  /** Sale status */
  status: SaleStatus;
  /** Sale Title */
  title?: Maybe<Scalars['String']>;
};

/** Sale */
export type SaleItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** Sale */
export type SaleParticipantsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<PaginationDirection>;
  take?: InputMaybe<Scalars['Int']>;
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
  closingDate?: Maybe<Scalars['String']>;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: Maybe<Scalars['String']>;
};

/** Input arguments for when creating or modifying a sale. */
export type SaleDatesInput = {
  /** Closing Date */
  closingDate?: InputMaybe<Scalars['String']>;
  /** Opening Date */
  openDate?: InputMaybe<Scalars['String']>;
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
  currentBid?: Maybe<Scalars['Int']>;
  /** Scheduled closing timestamp for the item. */
  dates: ItemDates;
  /** Item description */
  description?: Maybe<Scalars['String']>;
  /** High Estimate of item in minor currency unit. */
  highEstimate: Scalars['Int'];
  /** Id of an item. */
  id: Scalars['ID'];
  /** Images attached to saleItem */
  images: Array<Image>;
  /** Item number */
  itemNumber: Scalars['Int'];
  /** Current leader (user id) for the item */
  leaderId?: Maybe<Scalars['String']>;
  /** Low Estimate of item in minor currency unit. */
  lowEstimate: Scalars['Int'];
  /** Reserve on the item in minor currency unit. */
  reserve?: Maybe<Scalars['Int']>;
  /** Sale id, as items can be created without having to be associated to a sale. */
  saleId: Scalars['String'];
  /** Starting bid for the item in minor currency unit. */
  startingBid?: Maybe<Scalars['Int']>;
  /** Status of the item */
  status: ItemStatus;
  /** Item title */
  title?: Maybe<Scalars['String']>;
  /** Number of bids that have been placed on the item */
  totalBids: Scalars['Int'];
};

/** Item input when creating an item */
export type SaleItemInput = {
  /** Item number is used to order items (optional) */
  ItemNumber?: InputMaybe<Scalars['Int']>;
  /**
   * Allowed BidTypes on the item.
   * Currently only a single BidType is allowed per item.
   * Defaults to allowing only Max bids if not supplied.
   */
  allowedBidTypes?: InputMaybe<Array<BidType>>;
  /** Optional bid increment table for this item. */
  bidIncrementTable?: InputMaybe<BidIncrementTableInput>;
  /** Description for describing the item */
  description?: InputMaybe<Scalars['String']>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<Scalars['Int']>;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<Scalars['Int']>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<Scalars['Int']>;
  /** Id of the sale that is associated with the item. */
  saleId: Scalars['String'];
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<Scalars['Int']>;
  /** Title for describing the item */
  title: Scalars['String'];
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<Scalars['Int']>;
  /** Valuationo currency */
  valuationCurrency?: InputMaybe<Scalars['String']>;
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
  cursor: Scalars['String'];
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
  closed: Scalars['Int'];
  /** Number of sales in a closing state */
  closing: Scalars['Int'];
  /** Number of open sales */
  open: Scalars['Int'];
  /** Number of published sales */
  published: Scalars['Int'];
  /** Number of unpublished sales */
  unpublished: Scalars['Int'];
};

export type SalesAggregateInput = {
  /** Account ID the sales belong to */
  accountId: Scalars['String'];
};

export type SalesEdge = {
  __typename?: 'SalesEdge';
  /** Current sale cursor */
  cursor: Scalars['String'];
  /** Sale node */
  node: Sale;
};

/** Input to set an item winner and close the item. */
export type SetItemWinnerInput = {
  bidId: Scalars['String'];
  itemId: Scalars['String'];
  saleId: Scalars['String'];
};

/** Input to change the status of an item. */
export type SetSaleItemStatusInput = {
  itemId: Scalars['String'];
  saleId: Scalars['String'];
  status: ItemStatus;
};

/** Input object for when starting to close a sale. */
export type StartClosingSaleInput = {
  saleId: Scalars['String'];
};

/**
 * Action Hook response from test message.
 * Contains the status code received.
 */
export type TestActionHookResponse = {
  __typename?: 'TestActionHookResponse';
  requestHeaders: Array<Maybe<HttpHeader>>;
  requestMethod: Scalars['String'];
  requestPayload: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  responseHeaders?: Maybe<Array<Maybe<HttpHeader>>>;
  statusCode: Scalars['Int'];
};

/**
 * Token metadata is mandatory information that needs to be included
 * to create a signed bidder token.
 */
export type TokenMetadata = {
  /** Time to live of the bidders token, represented minutes. */
  ttl: Scalars['Int'];
  /** Unique User ID that represents a user in customer's user database. */
  userId: Scalars['String'];
};

/** Input to update an Action Hook subscription. */
export type UpdateActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: InputMaybe<Array<InputMaybe<HttpHeaderInput>>>;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: Scalars['String'];
};

/** Item input when modifying an item */
export type UpdateItemInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  valuationAmount?: InputMaybe<Scalars['Int']>;
  valuationCurrency?: InputMaybe<Scalars['String']>;
};

export type UpdateItemNumbersInput = {
  itemNumberChanges: Array<ItemNumberChangeInput>;
  saleId: Scalars['String'];
};

/**
 * Input for updating a sale.
 * All fields are mandatory. If something shouldn't change then
 * the provided value should be the same as it was before.
 */
export type UpdateSaleInput = {
  bidIncrementTable: BidIncrementTableInput;
  closingMethod: ClosingMethod;
  closingTimeCountdown: Scalars['Int'];
  currency: Scalars['String'];
  dates: SaleDatesInput;
  description: Scalars['String'];
  title: Scalars['String'];
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
  description?: InputMaybe<Scalars['String']>;
  /** High estimate of the item (optional) in minor currency unit. */
  highEstimate?: InputMaybe<Scalars['Int']>;
  /** Low estimate of the item (optional) in minor currency unit. */
  lowEstimate?: InputMaybe<Scalars['Int']>;
  /** Reserve of the item in minor currency unit. */
  reserve?: InputMaybe<Scalars['Int']>;
  /** Id of the sale that is associated with the item. */
  saleId: Scalars['String'];
  /** Starting bid of the item in minor currency unit. */
  startingBid?: InputMaybe<Scalars['Int']>;
  /** Title for describing the item */
  title: Scalars['String'];
  /** Valuation of the item in minor currency unit. */
  valuationAmount?: InputMaybe<Scalars['Int']>;
  /** Valuation currency in minor currency unit. */
  valuationCurrency?: InputMaybe<Scalars['String']>;
};

/**
 * A signed jwt token from Basta that is inteded to authenticate a
 * single user for a websocket connection to get updates based on user context.
 */
export type UserToken = {
  __typename?: 'UserToken';
  /** Expiration date as string. */
  expirationDate: Scalars['String'];
  /** Signed JWT token that can be used for websocket authentication */
  token: Scalars['String'];
};

export type UserTokenInput = {
  /** Time to live for the user token, represented as minutes */
  ttlMinutes: Scalars['Int'];
  /** Unique UserID that represents a user in your system. */
  userID: Scalars['String'];
};

export type Bid_On_ItemMutationVariables = Exact<{
  accountId: Scalars['String'];
  input: BidOnItemInput;
}>;

export type Bid_On_ItemMutation = {
  __typename?: 'Mutation';
  bidOnItemV2:
    | { __typename: 'BidPlacedError' }
    | { __typename: 'BidPlacedSuccess' };
};

export type Create_User_TokenMutationVariables = Exact<{
  accountId: Scalars['String'];
  input: UserTokenInput;
}>;

export type Create_User_TokenMutation = {
  __typename?: 'Mutation';
  createUserTokenV2: {
    __typename: 'UserToken';
    token: string;
    expirationDate: string;
  };
};

export type Get_SaleQueryVariables = Exact<{
  accountId: Scalars['String'];
  id: Scalars['ID'];
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['String']>;
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
          }>;
          dates: {
            __typename?: 'ItemDates';
            closingStart?: string | null;
            closingEnd?: string | null;
          };
        };
      }>;
      pageInfo: {
        __typename?: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
      };
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
      pageInfo: {
        __typename?: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
      };
    };
  };
};
