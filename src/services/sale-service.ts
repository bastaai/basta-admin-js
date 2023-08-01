import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { BastaResponse, ISaleService } from '../../types/sdk';
import {
  GET_SALE,
  GET_ALL_SALES,
  CREATE_SALE,
} from '../gql/generated/operations';
import {
  Get_SaleQueryVariables,
  Get_SaleQuery,
  Get_All_SalesQueryVariables,
  Get_All_SalesQuery,
  CreateSaleInput,
  Create_SaleMutation,
  Create_SaleMutationVariables,
  SaleConnection,
  SalesEdge,
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
      response: Get_SaleQuery;
    }> = await res.json();

    const sanitized: Sale = JSON.parse(JSON.stringify(json.data.response.sale));

    return sanitized;
  }

  async create(input: CreateSaleInput): Promise<Sale> {
    const variables: Create_SaleMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      response: Create_SaleMutation;
    }> = await res.json();

    const sanitized: Sale = JSON.parse(
      JSON.stringify(json.data.response.createSale)
    );

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

    const sanitized: SaleConnection = JSON.parse(
      JSON.stringify(json.data.sales)
    );

    const sales: Sale[] = sanitized.edges.map((sale: SalesEdge) => sale.node);

    return sales;
  }
}
