import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { ISaleService } from '../../types/sdk';
import { GET_SALE } from '../gql/generated/operations';
import {
  Get_SaleQueryVariables,
  Get_SaleQuery,
  SaleStatus,
} from '../gql/generated/types';

export class SaleService implements ISaleService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  create(): Promise<Sale> {
    throw new Error('Method not implemented.');
  }

  async get(): Promise<Sale> {
    const variables: Get_SaleQueryVariables = {
      accountId: '69',
      id: '420',
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_SALE,
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
