// Enums
import {
  BidType,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
  ApiTokenRole,
  ActionType,
  ActionHookStatus,
} from '../src/gql/generated/types';
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
export type { ActionHookLog, ActionHookSubscription } from './webhook';
export type { ApiToken, ApiTokenCreated } from './api-token';

export const initBasta: (args: {
  accountId: string;
  secretKey: string;
}) => IBastaAdmin;
