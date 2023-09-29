import { PaymentDetails } from './paymentDetails';
import { Link } from './link';

/** Account Information */
export type Account = {
  /** ID of the account */
  id: string;
  /** Name of the account */
  name: string;
  /** Contact email address */
  email: string;
  /** created */
  created: string;
  /** description */
  description?: string | null;
  /** account handle, identifier for the account */
  handle?: string | null;
  /** account image url */
  imageUrl?: string | null;
  /** account description (bio) */
  links: Link[];
  /** modified */
  modified?: string | null;
  /**
   * Platform Key.
   * Only returned on account creation
   */
  platformKey?: string;
  /**
   * Payment Details associated with account.
   */
  paymentDetails?: PaymentDetails | null;
};
