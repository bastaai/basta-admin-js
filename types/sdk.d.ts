import { Sale } from './sale';
import { UserToken } from './user';
import { BidType } from './bid';
import {
  AddItemToSaleInput,
  CreateItemInput,
  CreateSaleInput,
  Item,
  RemoveSaleItemInput,
  SaleItem,
  SaleItemInput,
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
  user: IUserService;
}
export interface IBidService {
  /** Places a bid on a Basta item. */
  placeBid(params: BidArgs): Promise<boolean>;
  /** Places a max bid on a Basta item. */
  placeMaxBid(params: BidArgs): Promise<boolean>;
  /** Places an offer on a Basta item. */
  placeOffer(params: BidArgs): Promise<boolean>;
}
export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
  /** Gets all Basta sales from a user. */
  getAll(): Promise<Sale[]>;
  /** Creates a Basta sale. */
  create(input: CreateSaleInput): Promise<Sale>;
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
  createItemForSale(input: SaleItemInput): Promise<SaleItem>;
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
export interface IUserService {
  /**
   * Generates a signed JWT token that can be used to access web sockets containing sensitive user data.
   * Returns a Promise that resolves with the token string, or null if the token could not be generated.
   */
  refreshUserToken(params: {
    uniqueUserId: string;
    ttlMinutes: number;
  }): Promise<UserToken | null>;
}
