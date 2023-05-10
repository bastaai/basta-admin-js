import { BastaRequest } from '../../types/request';
import { BastaResponse, IUserService } from '../../types/sdk';
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

    const json: BastaResponse<{
      createUserTokenV2: Create_User_TokenMutation;
    }> = await res.json();

    const sanitized: Create_User_TokenMutation = JSON.parse(
      JSON.stringify(json.data.createUserTokenV2)
    );

    return {
      expirationDate: sanitized.createUserTokenV2.expirationDate,
      token: sanitized.createUserTokenV2.token,
    };
  }
}
