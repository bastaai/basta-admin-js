import {
  Create_ItemMutationVariables,
  Create_ItemMutation,
  CreateItemInput,
  Item,
  Get_ItemQuery,
  Get_ItemQueryVariables,
  ItemsConnection,
  Get_All_ItemsQueryVariables,
  ItemsFilter,
  Get_All_ItemsQuery,
} from '../gql/generated/types';
import {
  CREATE_ITEM,
  GET_ALL_ITEMS,
  GET_ITEM,
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
      item: Get_ItemQuery;
    }> = await res.json();

    const sanitized: Item = JSON.parse(JSON.stringify(json.data.item));

    return sanitized;
  }

  async getAll(
    itemsFilter: ItemsFilter,
    first = 20,
    after?: string
  ): Promise<ItemsConnection> {
    const variables: Get_All_ItemsQueryVariables = {
      accountId: this._bastaReq.accountId,
      itemsFilter: itemsFilter,
      first: first,
      after: after,
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
      items: Get_All_ItemsQuery;
    }> = await res.json();

    const sanitized: ItemsConnection = JSON.parse(
      JSON.stringify(json.data.items)
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
      createItem: Create_ItemMutation;
    }> = await res.json();

    const sanitized: Item = JSON.parse(JSON.stringify(json.data.createItem));

    return sanitized;
  }
}
