import {
  BidType,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
} from '../src/gql/generated/types';
import { IBastaAdmin } from './sdk';

export { BidIncrementTable, Participant, Sale } from './sale';
export { Item } from './item';
export { BidResponse } from './bid';

// Enums
export { ClosingMethod, SaleStatus, ItemStatus, BidType };

export const initBasta: (
  args: {
    accountId: string;
    secretKey: string;
  },
  isStaging?: boolean
) => IBastaAdmin;
