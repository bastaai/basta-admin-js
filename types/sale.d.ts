import { Sale as SaleGql } from '../src/gql/generated/types';
import { ToPrimitive } from './utils';
/**
 * The Basta sale object.
 */
export type Sale = ToPrimitive<SaleGql>;
