import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { BastaResponse, ISaleService } from '../../types/sdk';
import { GET_SALE, GET_ALL_SALES } from '../gql/generated/operations';
import {
  Get_SaleQueryVariables,
  Get_SaleQuery,
  Get_All_SalesQueryVariables,
  Get_All_SalesQuery,
} from '../gql/generated/types';

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

    const sanitized: Sale = JSON.parse(JSON.stringify(json.data.sale));

    return sanitized;
  }

  async getAll(): Promise<Sale[]> {
    const variables: Get_All_SalesQueryVariables = {
      accountId: this._bastaReq.accountId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ALL_SALES,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      sales: Get_All_SalesQuery;
    }> = await res.json();

    const sanitized: Sale[] = JSON.parse(JSON.stringify(json.data.sales));

    return sanitized;
  }
}
