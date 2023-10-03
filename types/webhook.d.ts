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

/** Action types (events) that can trigger Action Hooks. */
export enum ActionType {
  /** Event: When bid on any item associated with your account occurs in the system. */
  BidOnItem = 'BID_ON_ITEM',
  /** Event: When an item status change associated with your account occurs in the system. */
  ItemsStatusChanged = 'ITEMS_STATUS_CHANGED',
  /** Event: When a sale status change associated with your account occurs in the system. */
  SaleStatusChanged = 'SALE_STATUS_CHANGED',
}

/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export type HttpHeader = {
  key: string;
  value: string;
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
