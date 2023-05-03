import { Sale } from './sale';

export interface SDK {
  sale: SaleServiceSDK;
  bid: BidServiceSDK;

  /**
   * Generates a signed JWT token that can be used to access web sockets containing sensitive user data.
   * Returns a Promise that resolves with the token string, or null if the token could not be generated.
   */
  refreshUserToken(): Promise<'string' | null>;
}

interface BidServiceSDK {
  /**
   * Places a bid on a Basta item.
   */
  placeBid(): Promise<boolean>;

  /**
   * Places an offer on a Basta item.
   */
  placeOffer(): Promise<boolean>;
}

interface SaleServiceSDK {
  /**
   * Creates a Basta sale.
   */
  create(): Promise<Sale>;

  /**
   * Gets a Basta sale.
   */
  get(): Promise<Sale>;
}
