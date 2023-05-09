import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { BastaResponse, ISaleService } from '../../types/sdk';
import { GET_SALE } from '../gql/generated/operations';
import { Get_SaleQueryVariables, Get_SaleQuery } from '../gql/generated/types';

export class SaleService implements ISaleService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async get(saleId: string): Promise<Sale> {
    const variables: Get_SaleQueryVariables = {
      id: saleId,
      accountId: this._bastaReq.accountId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      sale: Get_SaleQuery;
    }> = await res.json();

    const sanitized = JSON.parse(JSON.stringify(json.data.sale));

    return sanitized;
  }
}
