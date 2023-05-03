import { Sale } from '../../types';
import { ISaleService } from '../../types/sdk';
import {
  GetSaleDocument,
  GetSaleQueryVariables,
  GetSaleQuery,
} from '../gql/generated/graphql';
import { print } from 'graphql';
import { BastaReqHeaders } from '../../types/req-headers';

export class SaleService implements ISaleService {
  protected readonly _url: string;
  protected readonly _headers: BastaReqHeaders;

  constructor(url: string, headers: BastaReqHeaders) {
    this._url = url;
    this._headers = headers;
  }

  create(): Promise<Sale> {
    throw new Error('Method not implemented.');
  }

  async get(): Promise<Sale> {
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
