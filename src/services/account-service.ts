import { Account } from '../../types/account';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import {
  CREATE_ACCOUNT,
  CREATE_API_TOKEN,
  CREATE_USER_TOKEN,
  GET_ACCOUNT,
  GET_API_KEYS,
  REVOKE_API_TOKEN,
} from '../gql/generated/operations';
import {
  ApiToken,
  ApiTokenCreated,
  ApiTokenInput,
  CreateAccountInput,
  Create_AccountMutation,
  Create_AccountMutationVariables,
  Create_Api_TokenMutation,
  Create_Api_TokenMutationVariables,
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
  Get_AccountQuery,
  Get_AccountQueryVariables,
  Get_Api_KeysQuery,
  Get_Api_KeysQueryVariables,
  RevokeApiTokenInput,
  Revoke_Api_TokenMutation,
  Revoke_Api_TokenMutationVariables,
} from '../gql/generated/types';
import { mapTokenToToken } from '../utils';

export class AccountService implements IAccountService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
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

  async get(accountId: string): Promise<Account> {
    const variables: Get_AccountQueryVariables = {
      accountId: accountId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ACCOUNT,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_AccountQuery> = await res.json();
    const account = json.data.account;

    return {
      id: account.id,
      name: account.name,
      email: account.email,
      created: account.created,
      modified: account.modified ?? '',
      handle: account.handle ?? '',
      description: account.description ?? '',
      imageUrl: account.imageUrl ?? '',
      links: account.links,
    };
  }

  async getApiTokens(): Promise<ApiToken[]> {
    const variables: Get_Api_KeysQueryVariables = {
      accountId: this._bastaReq.accountId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_API_KEYS,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_Api_KeysQuery> = await res.json();
    return json.data.apiTokens.edges.map((x) => mapTokenToToken(x.node));
  }

  async revokeApiToken(input: RevokeApiTokenInput): Promise<boolean> {
    const variables: Revoke_Api_TokenMutationVariables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: REVOKE_API_TOKEN,
        variables: variables,
      }),
    });

    const json: BastaResponse<Revoke_Api_TokenMutation> = await res.json();
    return json.data.revokeApiToken;
  }

  async createApiToken(input: ApiTokenInput): Promise<ApiTokenCreated> {
    const variables: Create_Api_TokenMutationVariables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_API_TOKEN,
        variables: variables,
      }),
    });

    const json: BastaResponse<Create_Api_TokenMutation> = await res.json();
    return json.data.createApiToken;
  }
}
