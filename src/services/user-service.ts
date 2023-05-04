import { BastaReqHeaders } from '../../types/req-headers';
import { IUserService } from '../../types/sdk';

export class UserService implements IUserService {
  protected readonly _url: string;
  protected readonly _headers: BastaReqHeaders;

  constructor(url: string, headers: BastaReqHeaders) {
    this._url = url;
    this._headers = headers;
  }

  refreshUserToken(): Promise<'string' | null> {
    throw new Error('Method not implemented.');
  }
}
