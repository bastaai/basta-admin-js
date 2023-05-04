import { BastaReqHeaders } from '../../types/req-headers';
import { IUserService } from '../../types/sdk';
import { UserToken } from '../../types/user';
import { CREATE_USER_TOKEN } from '../gql/generated/operations';
import {
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
} from '../gql/generated/types';

export class UserService implements IUserService {
  protected readonly _url: string;
  protected readonly _headers: BastaReqHeaders;

  constructor(url: string, headers: BastaReqHeaders) {
    this._url = url;
    this._headers = headers;
  }

  async refreshUserToken(): Promise<UserToken> {
    const variables: Create_User_TokenMutationVariables = {
      accountId: '69',
      input: {
        ttlMinutes: 420,
        userID: '69420',
      },
    };

    const res = await fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        query: CREATE_USER_TOKEN,
        variables: variables,
      }),
    });

    const data: Create_User_TokenMutation = await res.json();

    return {
      expirationDate: data.createUserTokenV2.expirationDate,
      token: data.createUserTokenV2.token,
    };
  }
}
