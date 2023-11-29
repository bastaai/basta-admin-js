import {
  CreateSaleInput,
  PublishSaleInput,
  RemoveSaleItemInput,
  Sale,
  SaleItem,
  UpdateSaleItemInput,
} from './sale';
import { Bid, BidType, CancelLatestBidOnItemInput } from './bid';
import type { Account } from './account';
import {
  ActionHookFilter,
  ActionHookLog,
  ActionHookSubscription,
  ActionHookSubscriptionInput,
  DeleteActionHookSubscriptionInput,
  TestActionHookResponse,
  UpdateActionHookSubscriptionInput,
} from './webhook';
import {
  AddItemToSaleInput,
  CreateItemInput,
  Item,
  UpdateItemInput,
} from './item';
import {
  ApiToken,
  ApiTokenCreated,
  ApiTokenInput,
  RevokeApiTokenInput,
} from './api-token';

export type BastaResponse<T> = {
  data: T;
};

export type BidArgs = {
  amount: number;
  bidType: BidType;
  itemId: string;
  saleId: string;
  userId: string;
};

export interface IBastaAdmin {
  sale: ISaleService;
  bid: IBidService;
  item: IItemService;
  account: IAccountService;
  webhook: IWebHookService;
}
export interface IBidService {
  /** Bid on behalf of a user */
  bidOnBehalf(params: BidArgs): Promise<Bid>;
  /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
  cancelLatestBidOnItem(input: CancelLatestBidOnItemInput): Promise<Bid[]>;
}
export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
  /** Gets all Basta sales from a user. */
  getAll(): Promise<Sale[]>;
  /** Creates a Basta sale. */
  create(input: CreateSaleInput): Promise<Sale>;
  /** Publishes a sale, forcefully. */
  publish(input: PublishSaleInput): Promise<Sale>;
}

export interface IItemService {
  /** Gets a Basta item. */
  get(itemId: string): Promise<Item>;
  /** Gets all Basta items from a user. */
  getAll(): Promise<Item[]>;
  /** Creates a Basta item. */
  create(input: CreateItemInput): Promise<Item>;
  /** Updates a Basta item. This will update information about items for all sales that has not been closed. */
  update(itemId: string, input: UpdateItemInput): Promise<Item>;
  /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
  createItemForSale(
    item: Item,
    saleId: string,
    options: {
      startingBid?: number | null;
      reserve?: number | null;
    }
  ): Promise<SaleItem>;
  /** Add a currently existing item to a sale. */
  addItemToSale(input: AddItemToSaleInput): Promise<SaleItem>;
  /** Remove an item from the sale. This will not delete the item completely. */
  removeItemFromSale(input: RemoveSaleItemInput): Promise<Sale>;
  /** Update item associated with a sale. */
  updateItemForSale(
    itemId: string,
    input: UpdateSaleItemInput
  ): Promise<SaleItem>;
}

export interface IAccountService {
  /** Creates a user token that enables a user to subscribe to personal bidding data. */
  createUserToken(
    userId: string,
    ttlMinutes: number
  ): Promise<{ token: string; expirationDate: string }>;
  /** Gets a Basta account.  */
  get(accountId: string): Promise<Account>;
  /** Get API Keys that have created.  */
  getApiTokens(): Promise<ApiToken[]>;
  /** Create an API key, that can access all functions in the API on behalf of the logged in customer.  */
  createApiToken(input: ApiTokenInput): Promise<ApiTokenCreated>;
  /** Revoke the API key by id..  */
  revokeApiToken(input: RevokeApiTokenInput): Promise<boolean>;
}

export interface IWebHookService {
  /** Get account action hook subscriptions  */
  get(): Promise<ActionHookSubscription[]>;
  /** Get all Action Hook logs.  */
  getAllLogs(filter: ActionHookFilter): Promise<ActionHookLog[]>;
  /** Add action hook subscription  */
  add(input: ActionHookSubscriptionInput): Promise<ActionHookSubscription>;
  /** Delete action hook subscription  */
  delete(input: DeleteActionHookSubscriptionInput): Promise<boolean>;
  /** Update  action hook subscription  */
  update(
    input: UpdateActionHookSubscriptionInput
  ): Promise<ActionHookSubscription>;
  /** Test ActionHook configuration. This will trigger an action hook to be sent.  */
  testActionHook(
    input: ActionHookSubscriptionInput
  ): Promise<TestActionHookResponse>;
}
