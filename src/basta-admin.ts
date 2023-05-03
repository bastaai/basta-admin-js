import { Sale } from '../types/sale';
import { SDK } from '../types/sdk';

export class BastaAdmin implements SDK {
  private _secretKey: string;

  constructor(secretKey: string) {
    this._secretKey = secretKey;
  }

  refreshUserToken(): Promise<'string' | null> {
    throw new Error('Method not implemented.');
  }

  createSale(): Promise<Sale> {
    throw new Error('Method not implemented.');
  }

  getSale(): Promise<Sale> {
    throw new Error('Method not implemented.');
  }
}
