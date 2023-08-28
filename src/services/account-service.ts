import { Account } from '../../types/account';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import { CREATE_ACCOUNT, CREATE_USER_TOKEN } from '../gql/generated/operations';
import {
  CreateAccountInput,
  Create_AccountMutation,
  Create_AccountMutationVariables,
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
} from '../gql/generated/types';
import { mapAccountToAccount } from '../utils';

export class AccountService implements IAccountService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async __create(account: CreateAccountInput): Promise<Account> {
    const variables: Create_AccountMutationVariables = {
      input: {
        email: account.email,
        name: account.name,
        description: account.description,
        handle: account.handle,
        links: account.links,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        variables: variables,
        query: CREATE_ACCOUNT,
      }),
    });

    const json: BastaResponse<Create_AccountMutation> = await res.json();

    return mapAccountToAccount(json.data.createAccount);
  }

  async createUserToken(
    userId: string,
    ttlMinutes: number
  ): Promise<{ token: string; expirationDate: string }> {
    const variables: Create_User_TokenMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: {
        ttlMinutes: ttlMinutes,
        userID: userId,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        variables: variables,
        query: CREATE_USER_TOKEN,
      }),
    });

    const json: BastaResponse<Create_User_TokenMutation> = await res.json();

    return {
      token: json.data.createUserTokenV2.token,
      expirationDate: json.data.createUserTokenV2.expirationDate,
    };
  }
}
