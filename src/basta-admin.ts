import { BastaRequest } from '../types/request';
import {
  IBastaAdmin,
  IBidService,
  ISaleService,
  IUserService,
} from '../types/sdk';
import { BidService } from './services/bid-service';
import { SaleService } from './services/sale-service';
import { UserService } from './services/user-service';

export class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;
  readonly user: IUserService;

  protected readonly _bastaReq: BastaRequest;

  constructor(secretKey: string, accountId: string) {
    this._bastaReq = {
      accountId: accountId,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      url: process.env.BASTA_MANAGEMENT_API_URL!,
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
