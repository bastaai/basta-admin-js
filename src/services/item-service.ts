import {
  Create_ItemMutationVariables,
  Create_ItemMutation,
  CreateItemInput,
  Get_ItemQuery,
  Get_ItemQueryVariables,
  Get_All_ItemsQueryVariables,
  Get_All_ItemsQuery,
  UpdateItemInput,
  SaleItem,
  AddItemToSaleInput,
  RemoveSaleItemInput,
  UpdateSaleItemInput,
  Create_Item_For_SaleMutationVariables,
  Create_Item_For_SaleMutation,
  Add_Item_To_SaleMutation,
  Remove_Item_From_SaleMutation,
  Update_ItemMutation,
  Update_Item_For_SaleMutation,
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
import { Sale } from '../../types/sale';
import { Item } from '../../types/item';
import { mapItemToItem, mapSaleToSale } from '../utils';

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

    const json: BastaResponse<Get_ItemQuery> = await res.json();

    return mapItemToItem(json.data.item);
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

    const json: BastaResponse<Get_All_ItemsQuery> = await res.json();

    return json.data.items.edges.map((x) => mapItemToItem(x.node));
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

    const json: BastaResponse<Create_ItemMutation> = await res.json();

    return mapItemToItem(json.data.createItem);
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

    const json: BastaResponse<Update_ItemMutation> = await res.json();

    return mapItemToItem(json.data.updateItem);
  }

  async createItemForSale(
    item: Item,
    saleId: string,
    options: {
      startingBid?: number | null;
      reserve?: number | null;
    }
  ): Promise<SaleItem> {
    const variables: Create_Item_For_SaleMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: {
        saleId: saleId,
        title: item.title ?? '',
        startingBid: options.startingBid,
        reserve: options.reserve,
      },
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: CREATE_ITEM_FOR_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<Create_Item_For_SaleMutation> = await res.json();

    return json.data.createItemForSale;
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

    const json: BastaResponse<Add_Item_To_SaleMutation> = await res.json();

    return json.data.addItemToSale;
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

    const json: BastaResponse<Remove_Item_From_SaleMutation> = await res.json();

    return mapSaleToSale(json.data.removeItemFromSale);
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

    const json: BastaResponse<Update_Item_For_SaleMutation> = await res.json();

    return json.data.updateItemForSale;
  }
}
