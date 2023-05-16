import { Sale } from './sale';
import { UserToken } from './user';

export type BastaResponse<T> = {
  data: T;
};

export type BidArgs = {
  amount: number;
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
  /**
   * Places a bid on a Basta item.
   * @param bid Info about the bid itself.
   * @param executedByUserId Should **only** be used when placing a bid *on behalf of* another user. Defaults to `userId` value if not specified.
   */
  placeBid(bid: BidArgs, executedByUserId?: string): Promise<boolean>;
  /**
   * Places a max bid on a Basta item.
   * @param bid Info about the bid itself.
   * @param executedByUserId Should **only** be used when placing a bid *on behalf of* another user. Defaults to `userId` value if not specified.
   */
  placeMaxBid(bid: BidArgs, executedByUserId?: string): Promise<boolean>;
  /**
   * Places an offer on a Basta item.
   * @param bid Info about the bid itself.
   * @param executedByUserId Should **only** be used when placing a bid *on behalf of* another user. Defaults to `userId` value if not specified.
   */
  placeOffer(bid: BidArgs, executedByUserId?: string): Promise<boolean>;
}
export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
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
