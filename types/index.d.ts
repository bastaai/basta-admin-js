// Types
import { ApiTokenRole } from './api-token';
import { BidType } from './bid';
import { ItemStatus } from './item';
import { ClosingMethod, SaleStatus } from './sale';
import type { IBastaAdmin } from './sdk';
import { ActionHookStatus, ActionType } from './webhook';

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
