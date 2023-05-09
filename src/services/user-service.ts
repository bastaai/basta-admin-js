import { BastaRequest } from '../../types/request';
import { IUserService } from '../../types/sdk';
import { CREATE_USER_TOKEN } from '../gql/generated/operations';
import {
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
  UserToken,
} from '../gql/generated/types';

export class UserService implements IUserService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async refreshUserToken({
    uniqueUserId,
    ttlMinutes,
  }: {
    uniqueUserId: string;
    ttlMinutes: number;
  }): Promise<UserToken> {
    const variables: Create_User_TokenMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: {
        ttlMinutes: ttlMinutes,
        userID: uniqueUserId,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
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
