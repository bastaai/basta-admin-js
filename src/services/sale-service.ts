import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { BastaResponse, ISaleService } from '../../types/sdk';
import {
  GET_SALE,
  GET_ALL_SALES,
  CREATE_SALE,
  PUBLISH_SALE,
} from '../gql/generated/operations';
import {
  Get_SaleQueryVariables,
  Get_SaleQuery,
  Get_All_SalesQueryVariables,
  Get_All_SalesQuery,
  CreateSaleInput,
  Create_SaleMutation,
  Create_SaleMutationVariables,
  PublishSaleInput,
  Publish_SaleMutationVariables,
  Publish_SaleMutation,
} from '../gql/generated/types';

export class SaleService implements ISaleService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async publish(input: PublishSaleInput): Promise<Sale> {
    const variables: Publish_SaleMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: PUBLISH_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<Publish_SaleMutation> = await res.json();
    const sale = json.data.publishSale;

    return {
      accountId: sale.accountId,
      dates: sale.dates,
      id: sale.id,
      images: sale.images,
      items: sale.items.edges.map((x) => x.node),
      participants: sale.participants.edges.map((x) => x.node),
      sequenceNumber: sale.sequenceNumber,
      title: sale.title ?? '',
      description: sale.description ?? '',
      incrementTable: sale.incrementTable,
      status: sale.status,
      closingMethod: sale.closingMethod,
      closingTimeCountdown: sale.closingTimeCountdown,
    };
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

    const json: BastaResponse<Get_SaleQuery> = await res.json();
    const sale = json.data.sale;

    return {
      accountId: sale.accountId,
      dates: sale.dates,
      id: sale.id,
      images: sale.images,
      items: sale.items.edges.map((x) => x.node),
      participants: sale.participants.edges.map((x) => x.node),
      sequenceNumber: sale.sequenceNumber,
      title: sale.title ?? '',
      description: sale.description ?? '',
      incrementTable: sale.incrementTable,
      status: sale.status,
      closingMethod: sale.closingMethod,
      closingTimeCountdown: sale.closingTimeCountdown,
    };
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

    const json: BastaResponse<Create_SaleMutation> = await res.json();
    const sale = json.data.createSale;

    return {
      accountId: sale.accountId,
      dates: sale.dates,
      id: sale.id,
      images: sale.images,
      items: sale.items.edges.map((x) => x.node),
      participants: sale.participants.edges.map((x) => x.node),
      sequenceNumber: sale.sequenceNumber,
      title: sale.title ?? '',
      description: sale.description ?? '',
      incrementTable: sale.incrementTable,
      status: sale.status,
      closingMethod: sale.closingMethod,
      closingTimeCountdown: sale.closingTimeCountdown,
    };
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

    const json: BastaResponse<Get_All_SalesQuery> = await res.json();

    const sales: Sale[] = json.data.sales.edges.map((sale) => ({
      id: sale.node.id,
      title: sale.node.title ?? '',
      description: sale.node.description ?? '',
      accountId: sale.node.accountId,
      sequenceNumber: sale.node.sequenceNumber,
      dates: sale.node.dates,
      images: sale.node.images,
      items: sale.node.items.edges.map((x) => x.node),
      participants: sale.node.participants.edges.map((x) => x.node),
      incrementTable: sale.node.incrementTable,
      status: sale.node.status,
      closingMethod: sale.node.closingMethod,
      closingTimeCountdown: sale.node.closingTimeCountdown,
    }));

    return sales;
  }
}
