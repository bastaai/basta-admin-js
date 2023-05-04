import { BastaFetchReq } from '../../types/request';
import { IUserService } from '../../types/sdk';
import { UserToken } from '../../types/user';
import { CREATE_USER_TOKEN } from '../gql/generated/operations';
import {
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
} from '../gql/generated/types';

export class UserService implements IUserService {
  protected readonly _fetchReq: BastaFetchReq;

  constructor(fetchReq: BastaFetchReq) {
    this._fetchReq = fetchReq;
  }

  async refreshUserToken(): Promise<UserToken> {
    const variables: Create_User_TokenMutationVariables = {
      accountId: '69',
      input: {
        ttlMinutes: 420,
        userID: '69420',
      },
    };

    const res = await fetch(this._fetchReq.url, {
      method: 'POST',
      headers: this._fetchReq.headers,
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
