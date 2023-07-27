import { IBastaAdmin } from './sdk';

export * from './sale';
export * from './user';
export * from './item';
export * from './bid';

export const initBasta: (
  secretKey: string,
  accountId: string,
  cookie?: string
) => IBastaAdmin;
