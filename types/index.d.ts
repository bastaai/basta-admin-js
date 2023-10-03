// Enums
import {
  BidType,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
  ApiTokenRole,
} from '../src/gql/generated/types';
import { ActionHookStatus, ActionType } from './webhook';
// Types
import type { IBastaAdmin } from './sdk';

// Enums
export {
  ClosingMethod,
  SaleStatus,
  ItemStatus,
  BidType,
  ActionType,
  ActionHookStatus,
  ApiTokenRole,
};

// Types
export type { Account } from './account';
export type { BidIncrementTable, Participant, Sale, SaleItem } from './sale';
export type { Item } from './item';
export type { BidResponse } from './bid';
export type { ActionHookLog } from './webhook';
export type { ApiToken, ApiTokenCreated } from './api-token';

export const initBasta: (
  args: {
    accountId: string;
    secretKey: string;
  },
  isStaging: boolean
) => IBastaAdmin;
