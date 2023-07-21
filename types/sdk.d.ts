import { Sale } from './sale';
import { UserToken } from './user';
import { BidType } from './bid';
import {
  CreateItemInput,
  CreateSaleInput,
  Item,
  UpdateItemInput,
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
  /** Updates a Basta item. */
  update(itemId: string, input: UpdateItemInput): Promise<Item>;
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
