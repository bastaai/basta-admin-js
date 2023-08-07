import { BastaRequest } from '../types/request';
import {
  IBastaAdmin,
  ISaleService,
  IBidService,
  IUserService,
  IItemService,
} from '../types/sdk';
import { BidService } from './services/bid-service';
import { ItemService } from './services/item-service';
import { SaleService } from './services/sale-service';
import { UserService } from './services/user-service';

export const initBasta = (args: { accountId: string; secretKey: string }, isStaging = false) => {
  return new BastaAdmin(args.accountId, args.secretKey, isStaging);
};

class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;
  readonly user: IUserService;
  readonly item: IItemService;

  private readonly _bastaReq: BastaRequest;

  constructor(accountId: string, secretKey: string, isStaging?: boolean) {
    if (typeof window !== 'undefined') {
      throw new Error(
        'Basta Admin SDK is not designed to be used in a browser environment. Exposing the secret key is a security risk.'
      );
    }

    this._bastaReq = {
      accountId: accountId,
      url: `https://management.api.basta.${isStaging ? 'wtf' : 'ai'}/graphql`,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': secretKey,
        'x-account-id': accountId,
      },
    };

    this.sale = new SaleService(this._bastaReq);
    this.bid = new BidService(this._bastaReq);
    this.user = new UserService(this._bastaReq);
    this.item = new ItemService(this._bastaReq);
  }
}
