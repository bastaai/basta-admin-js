import { IBastaAdmin } from './sdk';

export * from './sale';
export * from './user';
export * from './item';
export * from './bid';
export * from './enums';

export const initBasta: (
  args: {
    accountId: string;
    secretKey: string;
  },
  isStaging?: boolean
) => IBastaAdmin;
