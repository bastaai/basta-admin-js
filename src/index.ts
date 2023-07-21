import { BastaRequest } from '../types/request';
import {
  IBastaAdmin,
  ISaleService,
  IBidService,
  IUserService,
} from '../types/sdk';
import { BidService } from './services/bid-service';
import { SaleService } from './services/sale-service';
import { UserService } from './services/user-service';

export const initBasta = (secretKey: string, accountId: string) => {
  return new BastaAdmin(secretKey, accountId);
};

class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;
  readonly user: IUserService;

  private readonly _bastaReq: BastaRequest;

  constructor(secretKey: string, accountId: string) {
    if (typeof window !== 'undefined') {
      throw new Error(
        'Basta Admin SDK is not designed to be used in a browser environment. Exposing the secret key is a security risk.'
      );
    }

    this._bastaReq = {
      accountId: accountId,
      url: 'https://management.api.basta.ai/graphql', // CHANGE THIS
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': secretKey,
        'x-account-id': accountId,
      },
    };

    this.sale = new SaleService(this._bastaReq);
    this.bid = new BidService(this._bastaReq);
    this.user = new UserService(this._bastaReq);
  }
}
