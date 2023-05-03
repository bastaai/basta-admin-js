import { print } from 'graphql';

import { Sale } from '../types/sale';
import { SDK } from '../types/sdk';
import {
  GetSaleDocument,
  GetSaleQuery,
  GetSaleQueryVariables,
} from './gql/generated/graphql';

export class BastaAdmin implements SDK {
  private readonly _headers: {
    'Content-Type': string;
    'x-api-key': string;
  };
  private readonly _url: string;

  constructor(secretKey: string) {
    this._headers = {
      'Content-Type': 'application/json',
      'x-api-key': secretKey,
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._url = process.env.BASTA_MANAGEMENT_API_URL!;
  }

  refreshUserToken(): Promise<'string' | null> {
    throw new Error('Method not implemented.');
  }

  createSale(): Promise<Sale> {
    throw new Error('Method not implemented.');
  }

  async getSale(): Promise<Sale> {
    const query = print(GetSaleDocument);
    const variables: GetSaleQueryVariables = {
      accountId: '69',
      id: '420',
    };

    const res = await fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });

    const data: GetSaleQuery = await res.json();

    const sale: Sale = {
      id: data.sale.id,
    };

    return sale;
  }
}
