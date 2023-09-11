import { Sale } from './sale';
import { BidResponse, BidType } from './bid';
import type { Account } from './account';
import {
  AddItemToSaleInput,
  CreateAccountInput,
  CreateItemInput,
  CreateSaleInput,
  Item,
  PublishSaleInput,
  RemoveSaleItemInput,
  SaleItem,
  UpdateItemInput,
  UpdateSaleItemInput,
} from '../src/gql/generated/types';

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
}
export interface IBidService {
  /** Places a bid on a Basta item. */
  placeBid(params: BidArgs): Promise<BidResponse>;
  /** Places a max bid on a Basta item. */
  placeMaxBid(params: BidArgs): Promise<BidResponse>;
  /** Places an offer on a Basta item. */
  placeOffer(params: BidArgs): Promise<BidResponse>;
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
  /** Creates a Basta account.  */
  __create(
    account: CreateAccountInput,
    headers: NodeJS.Dict<string | string[]>
  ): Promise<Account>;
  /** Creates a user token that enables a user to subscribe to personal bidding data. */
  createUserToken(
    userId: string,
    ttlMinutes: number
  ): Promise<{ token: string; expirationDate: string }>;
  /** Gets a Basta account.  */
  get(accountId: string): Promise<Account>;
}
