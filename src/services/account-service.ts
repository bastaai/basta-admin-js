import { Account } from '../../types/account';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import { CREATE_ACCOUNT } from '../gql/generated/operations';
import {
  Create_AccountMutationVariables,
  Account as _Account,
} from '../gql/generated/types';

export class AccountService implements IAccountService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async create(account: Account): Promise<Account> {
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

    const json: BastaResponse<{ createAccount: _Account }> = await res.json();
    const sanitized: _Account = JSON.parse(
      JSON.stringify(json.data.createAccount)
    );

    if (sanitized.__typename !== 'Account') {
      throw new Error('Account could not be created');
    }

    return {
      id: sanitized.id,
      name: sanitized.name,
      description: sanitized.description,
      email: sanitized.email,
      handle: sanitized.handle,
      links: sanitized.links,
      imageUrl: sanitized.imageUrl,
      modified: sanitized.modified,
      modifiedByUserId: sanitized.modifiedByUserID,
      created: sanitized.created,
      createdByUserId: sanitized.createdByUserID,
    };
  }
}
