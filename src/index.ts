import { BastaRequest } from '../types/request';
import {
  IBastaAdmin,
  ISaleService,
  IBidService,
  IItemService,
  IAccountService,
} from '../types/sdk';
import { ClosingMethod, ItemStatus, SaleStatus } from './gql/generated/types';
import { AccountService } from './services/account-service';
import { BidService } from './services/bid-service';
import { ItemService } from './services/item-service';
import { SaleService } from './services/sale-service';

export const initBasta = (
  args: { accountId: string; secretKey: string },
  isStaging = false
) => {
  return new BastaAdmin(args.accountId, args.secretKey, isStaging);
};

export { ClosingMethod, SaleStatus, ItemStatus };

class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;
  readonly item: IItemService;
  readonly account: IAccountService;

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
    this.item = new ItemService(this._bastaReq);
    this.account = new AccountService(this._bastaReq);
  }
}
