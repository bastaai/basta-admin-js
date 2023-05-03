import { Sale } from './sale';

export interface SDK {
  /**
   * Generates a signed JWT token that can be used to access web sockets containing sensitive user data.
   * Returns a Promise that resolves with the token string, or null if the token could not be generated.
   */
  refreshUserToken(): Promise<'string' | null>;

  /**
   * Creates a Basta sale.
   */
  createSale(): Promise<Sale>;

  /**
   * Gets a Basta sale.
   */
  getSale(): Promise<Sale>;
}
