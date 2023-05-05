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

class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;
  readonly user: IUserService;

  private readonly _bastaReq: BastaRequest;

  constructor(secretKey: string, accountId: string) {
    this._bastaReq = {
      accountId: accountId,
      url: 'https://management.api.stage.basta.ai/graphql',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': secretKey,
      },
    };

    this.sale = new SaleService(this._bastaReq);
    this.bid = new BidService(this._bastaReq);
    this.user = new UserService(this._bastaReq);
  }
}

export { Sale } from '../types/sale';
export { BidService } from './services/bid-service';
export { SaleService } from './services/sale-service';
export { UserService } from './services/user-service';

export default BastaAdmin;
