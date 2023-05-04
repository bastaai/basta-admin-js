import { Sale } from '../../types';
import { ISaleService } from '../../types/sdk';
import {
  Get_Sale,
  Get_SaleQueryVariables,
  Get_SaleQuery,
  SaleStatus,
} from '../gql/generated';
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
    const query = print(Get_Sale);
    const variables: Get_SaleQueryVariables = {
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

    const data: Get_SaleQuery = await res.json();

    const sale: Sale = {
      id: data.sale.id,
      accountId: '',
      closingTimeCountdown: 0,
      dates: {
        __typename: undefined,
        closingDate: undefined,
        openDate: undefined,
      },
      images: [],
      items: {
        __typename: undefined,
        edges: [],
        pageInfo: {
          __typename: undefined,
          endCursor: '',
          hasNextPage: false,
          startCursor: '',
        },
      },
      participants: {
        __typename: undefined,
        edges: [],
        pageInfo: {
          __typename: undefined,
          endCursor: '',
          hasNextPage: false,
          startCursor: '',
        },
        totalCount: 0,
      },
      sequenceNumber: 0,
      status: SaleStatus.Closed,
    };

    return sale;
  }
}
