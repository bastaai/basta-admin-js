import {
  Create_ItemMutationVariables,
  Create_ItemMutation,
  CreateItemInput,
  Item,
  Get_ItemQuery,
  Get_ItemQueryVariables,
  Get_All_ItemsQueryVariables,
  Get_All_ItemsQuery,
  UpdateItemInput,
  SaleItemInput,
  SaleItem,
  AddItemToSaleInput,
  RemoveSaleItemInput,
  Sale,
  UpdateSaleItemInput,
} from '../gql/generated/types';
import {
  ADD_ITEM_TO_SALE,
  CREATE_ITEM,
  CREATE_ITEM_FOR_SALE,
  GET_ALL_ITEMS,
  GET_ITEM,
  REMOVE_ITEM_FROM_SALE,
  UPDATE_ITEM,
  UPDATE_ITEM_FOR_SALE,
} from '../gql/generated/operations';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IItemService } from '../../types/sdk';

// Add this to your ItemService class

export class ItemService implements IItemService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async get(itemId: string): Promise<Item> {
    const variables: Get_ItemQueryVariables = {
      accountId: this._bastaReq.accountId,
      itemId: itemId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ITEM,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      response: Get_ItemQuery;
    }> = await res.json();

    const sanitized: Item = JSON.parse(JSON.stringify(json.data.response.item));

    return sanitized;
  }

  async getAll(): Promise<Item[]> {
    const variables: Get_All_ItemsQueryVariables = {
      accountId: this._bastaReq.accountId,
      itemsFilter: { onlyMyItems: false },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ALL_ITEMS,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      response: Get_All_ItemsQuery;
    }> = await res.json();

    const sanitized: Item[] = JSON.parse(
      JSON.stringify(json.data.response.items.edges)
    );
    return sanitized;
  }

  async create(input: CreateItemInput): Promise<Item> {
    const variables: Create_ItemMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_ITEM,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      response: Create_ItemMutation;
    }> = await res.json();

    const sanitized: Item = JSON.parse(
      JSON.stringify(json.data.response.createItem)
    );

    return sanitized;
  }

  async update(itemId: string, input: UpdateItemInput): Promise<Item> {
    const variables = {
      accountId: this._bastaReq.accountId,
      itemId: itemId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: UPDATE_ITEM,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      item: Item;
    }> = await res.json();

    const sanitized: Item = JSON.parse(JSON.stringify(json.data.item));

    return sanitized;
  }

  async createItemForSale(input: SaleItemInput): Promise<SaleItem> {
    const variables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_ITEM_FOR_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      saleItem: SaleItem;
    }> = await res.json();

    const saleItem: SaleItem = JSON.parse(JSON.stringify(json.data.saleItem));

    return saleItem;
  }

  async addItemToSale(input: AddItemToSaleInput): Promise<SaleItem> {
    const variables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: ADD_ITEM_TO_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{ saleItem: SaleItem }> = await res.json();

    const sanitized: SaleItem = JSON.parse(JSON.stringify(json.data.saleItem));

    return sanitized;
  }

  async removeItemFromSale(input: RemoveSaleItemInput): Promise<Sale> {
    const variables = {
      accountId: this._bastaReq.accountId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: REMOVE_ITEM_FROM_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{ sale: Sale }> = await res.json();

    const sanitized: Sale = JSON.parse(JSON.stringify(json.data.sale));

    return sanitized;
  }

  async updateItemForSale(
    itemId: string,
    input: UpdateSaleItemInput
  ): Promise<SaleItem> {
    const variables = {
      accountId: this._bastaReq.accountId,
      itemId,
      input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: UPDATE_ITEM_FOR_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{ saleItem: SaleItem }> = await res.json();

    const sanitized: SaleItem = JSON.parse(JSON.stringify(json.data.saleItem));

    return sanitized;
  }
}
