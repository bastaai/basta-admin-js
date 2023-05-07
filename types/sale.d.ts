import {
  Sale as SaleGql,
  SaleStatus as SaleStatusGql,
} from '../src/gql/generated/types';
import { ToPrimitive } from './utils';

// Sale
export type Sale = ToPrimitive<SaleGql>;
// Sale status
export { SaleStatusGql as SaleStatus };
