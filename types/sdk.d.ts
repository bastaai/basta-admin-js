import { Sale } from './sale';
import { UserToken } from './user';
export interface IBastaAdmin {
  sale: ISaleService;
  bid: IBidService;
  user: IUserService;
}
export interface IBidService {
  /** Places a bid on a Basta item. */
  placeBid(): Promise<boolean>;
  /** Places an offer on a Basta item. */
  placeOffer(): Promise<boolean>;
}
export interface ISaleService {
  /** Creates a Basta sale. */
  create(): Promise<Sale>;
  /** Gets a Basta sale. */
  get(): Promise<Sale>;
}
export interface IUserService {
  /**
   * Generates a signed JWT token that can be used to access web sockets containing sensitive user data.
   * Returns a Promise that resolves with the token string, or null if the token could not be generated.
   */
  refreshUserToken(): Promise<UserToken | null>;
}
