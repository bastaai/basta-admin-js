import { BastaReqHeaders } from '../../types/req-headers';
import { IBidService } from '../../types/sdk';

export class BidService implements IBidService {
  protected readonly _url: string;
  protected readonly _headers: BastaReqHeaders;

  constructor(url: string, headers: BastaReqHeaders) {
    this._url = url;
    this._headers = headers;
  }

  placeBid(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  placeOffer(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
