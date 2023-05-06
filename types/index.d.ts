import { IBastaAdmin } from './sdk';

export * from './sale';
export * from './user';

export const initBasta: (secretKey: string, accountId: string) => IBastaAdmin;
