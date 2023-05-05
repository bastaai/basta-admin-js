import { BastaRequest } from '../types/request';
import { IBidService } from '../types/sdk';

export class BidService implements IBidService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  placeBid(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  placeOffer(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
