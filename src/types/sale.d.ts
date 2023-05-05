import { Sale as SaleGql } from '../gql/generated/types';
import { ToPrimitive } from './utils';

/**
 * The Basta sale object.
 */
export type Sale = ToPrimitive<SaleGql>;

/**
 * Represents the different strategies for closing Basta sales sequentially.
 */
type ClosingMethod = 'ONE_BY_ONE' | 'OVERLAPPING' | 'NONE';

/**
 * Represents the date information associated with a Basta sale.
 */
interface SaleDates {
  // The date when the Sale is scheduled to close.
  closingDate: string;

  // The date when the Sale is scheduled to open.
  openDate: string;
}

/**
 * Represents a rule defining the bid increment within a specific price range for a Basta sale.
 */
interface SaleRangeRule {
  // The upper limit of the price range for which this rule applies.
  highRange: number;

  // The lower limit of the price range for which this rule applies.
  lowRange: number;

  // The bid increment value within the specified price range.
  step: number;
}

/**
 * Represents a table containing a set of rules defining bid increments for different price ranges in a Basta sale.
 */
interface SaleBidIncrementTable {
  // An array of SaleRangeRule objects, each representing a rule for a specific price range.
  rules: SaleRangeRule[];
}

/**
 * Parameters needed to create a Basta Sale.
 */
interface SaleCreateParams {
  dates: SaleDates[];
  title: string;
  description: string;
  currency: string;
  bidIncrementTable?: SaleBidIncrementTable | undefined | null;
  closingMethod: ClosingMethod;
  closingTimeCountdown?: number | undefined | null;
}
