import { IBastaAdmin, IBidService, ISaleService } from '../types/sdk';
import { BidService } from './services/bid-service';
import { SaleService } from './services/sale-service';

export class BastaAdmin implements IBastaAdmin {
  readonly sale: ISaleService;
  readonly bid: IBidService;

  protected readonly _url: string;
  protected readonly _headers: {
    'Content-Type': string;
    'x-api-key': string;
  };

  constructor(secretKey: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._url = process.env.BASTA_MANAGEMENT_API_URL!;
    this._headers = {
      'Content-Type': 'application/json',
      'x-api-key': secretKey,
    };

    this.sale = new SaleService(this._url, this._headers);
    this.bid = new BidService(this._url, this._headers);
  }

  refreshUserToken(): Promise<'string' | null> {
    throw new Error('Method not implemented.');
  }
}
