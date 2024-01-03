// Types
import { ApiKeyRole } from './api-key';
import { BidType } from './bid';
import { ItemStatus } from './item';
import { ClosingMethod, SaleStatus } from './sale';
import type { IBastaAdmin } from './sdk';
import { ActionHookStatus, ActionType } from './webhook';

// Enums
export {
  ActionHookStatus,
  ActionType,
  ApiKeyRole,
  BidType,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
};

// Types
export type { Account } from './account';
export type { ApiKey, ApiKeyCreated } from './api-key';
export type { BidResponse } from './bid';
export type { Item } from './item';
export type { BidIncrementTable, Participant, Sale, SaleItem } from './sale';
export type { ActionHookLog, ActionHookSubscription } from './webhook';

export const initBasta: (args: {
  accountId: string;
  secretKey: string;
}) => IBastaAdmin;
