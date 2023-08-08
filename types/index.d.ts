import { IBastaAdmin } from './sdk';

export * from './sale';
export * from './user';
export * from './item';
export * from './bid';

export const initBasta: (
  args: {
    accountId: string;
    secretKey: string;
  },
  isStaging?: boolean
) => IBastaAdmin;
