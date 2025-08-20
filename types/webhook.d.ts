/**
 * Action Hook subscription contains subscriber registration information.
 * Action Hook is an action that occurs when an event happens.
 * Action can be an HTTP POST request that will be triggered to customers web servers.
 */
export type ActionHookSubscription = {
  /** Account identifier. */
  accountId: string;
  /** Name of the basta action that is being subscribed to. */
  action: ActionType;
  /** Custom HTTP header values sent with the action Action Hook. */
  headers?: Array<HttpHeader | null | undefined> | null | undefined;
  /** Action Hook receiver endpoint. */
  url: string;
};

/**
 * Action Hook Log represents a recorded Action Hook HTTP request to a customers web servers.
 * Log entry may contain information about a pending, successful or failed request.
 */
export type ActionHookLog = {
  /** Account identifier. */
  accountId: string;
  /** Action triggering the Action Hook. */
  action: ActionType;
  /** Log creation timestamp. */
  createdAt?: string | null | undefined;
  /** Error message returned by receiver. */
  error?: string | null | undefined;
  /** Latest request execution timestamp. */
  executedAt?: string | null | undefined;
  /** Headers sent with the Action Hook request. */
  headers?: Array<HttpHeader | null | undefined> | null | undefined;
  /** Action Hook log entry identifier. */
  id: string;
  /** Idempotency key */
  idempotencyKey: string;
  /** Request Payload as stringified json */
  requestPayload: string;
  /** Response from Action Hook receiver. */
  response?: string | null | undefined;
  /** Number of HTTP request retries. */
  retries?: number | null | undefined;
  /** Status of the Action Hook request. */
  status?: ActionHookStatus | null | undefined;
  /** Action Hook receiver endpoint. */
  url: string;
};

/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export type HttpHeader = {
  key: string;
  value: string;
};

/** Filter for the Action Hook log. */
export type ActionHookFilter = {
  /** Filter by Action Hook status */
  statuses?: Array<ActionHookStatus | null | undefined> | null | undefined;
  /** Filter by Action Hook types */
  types?: Array<ActionType | null | undefined> | null | undefined;
};

/** Input to create an Action Hook subscription. */
export type ActionHookSubscriptionInput = {
  /** Events that trigger the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: Array<HttpHeaderInput | null | undefined> | null | undefined;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: string;
};

/** Input to include custom header key-value pairs with Action Hook requests. */
export type HttpHeaderInput = {
  key: string;
  value: string;
};

/** Input to delete an Action Hook subscription. */
export type DeleteActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
};

/** Input to update an Action Hook subscription. */
export type UpdateActionHookSubscriptionInput = {
  /** Event that triggers the action. */
  action: ActionType;
  /** Custom HTTP header values sent with the action. */
  headers?: Array<HttpHeaderInput | null | undefined> | null | undefined;
  /** Webhook URL that is called when Action Hook is triggered. */
  url: string;
};

/**
 * Action Hook response from test message.
 * Contains the status code received.
 */
export type TestActionHookResponse = {
  requestHeaders: Array<HttpHeader | null | undefined>;
  requestMethod: string;
  requestPayload: string;
  responseBody?: string | null | undefined;
  responseHeaders?: Array<HttpHeader | null | undefined> | null | undefined;
  statusCode: number;
};

/** Action types (events) that can trigger Action Hooks. */
export enum ActionType {
  /** Event: When bid on any item associated with your account occurs in the system. */
  BidOnItem = 'BID_ON_ITEM',
  /** Event: When an item status change associated with your account occurs in the system. */
  ItemsStatusChanged = 'ITEMS_STATUS_CHANGED',
  /** Event: When a sale status change associated with your account occurs in the system. */
  SaleStatusChanged = 'SALE_STATUS_CHANGED',
  CancelBidOnItem = 'CANCEL_BID_ON_ITEM',
  ItemAddedToSale = 'ITEM_ADDED_TO_SALE',
  OrderCreated = 'ORDER_CREATED',
  OrderUpdated = 'ORDER_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleItemRemoved = 'SALE_ITEM_REMOVED',
  SaleItemUpdated = 'SALE_ITEM_UPDATED',
}

/** Status of the Action Hook request. */
export enum ActionHookStatus {
  /** Action Hook request failed. */
  Failed = 'FAILED',
  /** Action Hook request is queued to be sent. */
  Pending = 'PENDING',
  /** Action Hook request was successfully sent. */
  Success = 'SUCCESS',
  Retry = 'RETRY',
}
