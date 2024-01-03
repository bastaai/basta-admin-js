import { Account } from '../../types/account';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import {
  CREATE_API_KEY,
  CREATE_USER_TOKEN,
  GET_ACCOUNT,
  GET_API_KEYS,
  REVOKE_API_KEY,
} from '../gql/generated/operations';
import {
  ApiKey,
  ApiKeyCreated,
  ApiKeyInput,
  Create_Api_KeyMutation,
  Create_Api_KeyMutationVariables,
  Create_User_TokenMutation,
  Create_User_TokenMutationVariables,
  Get_AccountQuery,
  Get_AccountQueryVariables,
  Get_Api_KeysQuery,
  Get_Api_KeysQueryVariables,
  RevokeApiKeyInput,
  Revoke_Api_KeyMutation,
  Revoke_Api_KeyMutationVariables,
} from '../gql/generated/types';
import { mapKeyToKey } from '../utils';

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

  async getApiKeys(): Promise<ApiKey[]> {
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
    return json.data.apiKeys.edges.map((x) => mapKeyToKey(x.node));
  }

  async revokeApiKey(input: RevokeApiKeyInput): Promise<boolean> {
    const variables: Revoke_Api_KeyMutationVariables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: REVOKE_API_KEY,
        variables: variables,
      }),
    });

    const json: BastaResponse<Revoke_Api_KeyMutation> = await res.json();
    return json.data.revokeApiKey;
  }

  async createApiKey(input: ApiKeyInput): Promise<ApiKeyCreated> {
    const variables: Create_Api_KeyMutationVariables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_API_KEY,
        variables: variables,
      }),
    });

    const json: BastaResponse<Create_Api_KeyMutation> = await res.json();
    return json.data.createApiKey;
  }
}
