/** Account Information */
export const Account = '';

/** Action Hook Log represents a recorded Action Hook HTTP request to a customers web servers.
Log entry may contain information about a pending, successful or failed request. */
export const ActionHookLog = '';

/** Datatype to group together 'connected' Action Hook logs
based on page information. */
export const ActionHookLogConnection = '';

/** Datatype encapsulating an Action Hook log entry and its cursor. */
export const ActionHookLogEdge = '';

/** Action Hook subscription contains subscriber registration information.
Action Hook is an action that occurs when an event happens.
Action can be an HTTP POST request that will be triggered to customers web servers. */
export const ActionHookSubscription = '';

/** API token represent a token that allows
customers to access the API in machine and machine manner. */
export const ApiToken = '';

/** null */
export const ApiTokenConnection = '';

/** Created API token represent a token that allows
customers to access the API in machine and machine manner and includes
the API key that the caller needs to write down (not able to see the key again) */
export const ApiTokenCreated = '';

/** null */
export const ApiTokensEdge = '';

/** A bid on a item */
export const Bid = '';

/** Bid increment table represent how increments behave for a
specific item or a sale. */
export const BidIncrementTable = '';

/** Error response for bidOnItem */
export const BidPlacedError = '';

/** Bid was successfully placed */
export const BidPlacedSuccess = '';

/** Bidder token is a token that is signed on behalf a user.
The token returned will allow users to bid on items. */
export const BidderToken = '';

/** null */
export const BidsConnection = '';

/** null */
export const BidsEdge = '';

/** Response when canceling latest bid on item */
export const CanceledLatestBidOnItem = '';

/** null */
export const GetItemInput = '';

/** HttpHeader contains custom http request header information to be included in Action Hooks.
All Action Hooks are sent with the {"Content-Type": "application/json"} header by default. */
export const HttpHeader = '';

/** Image object */
export const Image = '';

/** null */
export const Item = '';

/** null */
export const ItemDates = '';

/** null */
export const ItemsConnection = '';

/** null */
export const ItemsEdge = '';

/** null */
export const Link = '';

/** null */
export const Mutation = '';

/** Page info for pagination */
export const PageInfo = '';

/** Participant represent a bidder in a sale, it will be automatically created
when the user starts bidding on a sale. */
export const Participant = '';

/** null */
export const ParticipantsConnection = '';

/** null */
export const ParticipantsEdge = '';

/** null */
export const Query = '';

/** Range rule explains increments in the table.
Represented as minor currency units. */
export const RangeRule = '';

/** Sale */
export const Sale = '';

/** null */
export const SaleConnection = '';

/** Sale Dates */
export const SaleDates = '';

/** A sale item (item that has been added to a sale) */
export const SaleItem = '';

/** null */
export const SaleItemsConnection = '';

/** null */
export const SaleItemsEdge = '';

/** null */
export const SalesAggregate = '';

/** null */
export const SalesEdge = '';

/** Action Hook response from test message.
Contains the status code received. */
export const TestActionHookResponse = '';

/** A signed jwt token from Basta that is inteded to authenticate a
single user for a websocket connection to get updates based on user context. */
export const UserToken = '';
