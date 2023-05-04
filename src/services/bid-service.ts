import { BastaFetchReq } from '../../types/request';
import { IBidService } from '../../types/sdk';

export class BidService implements IBidService {
  protected readonly _fetchReq: BastaFetchReq;

  constructor(fetchReq: BastaFetchReq) {
    this._fetchReq = fetchReq;
  }

  placeBid(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  placeOffer(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
