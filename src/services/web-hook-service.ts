import { BastaRequest } from '../../types/request';
import { BastaResponse, IWebHookService } from '../../types/sdk';
import {
  ADD_HOOK_SUBSCRIPTION,
  DELETE_HOOK_SUBSCRIPTION,
  GET_ALL_LOGS,
  GET_HOOK_SUBSCRIPTION,
  TEST_HOOK_SUBSCRIPTION,
  UPDATE_HOOK_SUBSCRIPTION,
} from '../gql/generated/operations';
import {
  ActionHookFilter,
  ActionHookLog,
  ActionHookSubscription,
  ActionHookSubscriptionInput,
  Add_Hook_SubscriptionMutation,
  Add_Hook_SubscriptionMutationVariables,
  DeleteActionHookSubscriptionInput,
  Delete_Hook_SubscriptionMutation,
  Delete_Hook_SubscriptionMutationVariables,
  Get_All_LogsQuery,
  Get_All_LogsQueryVariables,
  Get_Hook_SubscriptionQuery,
  Get_Hook_SubscriptionQueryVariables,
  TestActionHookResponse,
  Test_Hook_SubscriptionMutation,
  Test_Hook_SubscriptionMutationVariables,
  UpdateActionHookSubscriptionInput,
  Update_Hook_SubscriptionMutation,
  Update_Hook_SubscriptionMutationVariables,
} from '../gql/generated/types';
import { mapWebHookLogToWebHookLog } from '../utils';

export class WebHookService implements IWebHookService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async get(): Promise<ActionHookSubscription[]> {
    const variables: Get_Hook_SubscriptionQueryVariables = {
      accountId: this._bastaReq.accountId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_HOOK_SUBSCRIPTION,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_Hook_SubscriptionQuery> = await res.json();

    return json.data.actionHookSubscriptions;
  }

  async add(
    input: ActionHookSubscriptionInput
  ): Promise<ActionHookSubscription> {
    const variables: Add_Hook_SubscriptionMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: ADD_HOOK_SUBSCRIPTION,
        variables: variables,
      }),
    });

    const json: BastaResponse<Add_Hook_SubscriptionMutation> = await res.json();

    return json.data.addActionHookSubscription;
  }

  async delete(input: DeleteActionHookSubscriptionInput): Promise<boolean> {
    const variables: Delete_Hook_SubscriptionMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: DELETE_HOOK_SUBSCRIPTION,
        variables: variables,
      }),
    });

    const json: BastaResponse<Delete_Hook_SubscriptionMutation> =
      await res.json();

    return json.data.deleteActionHookSubscription;
  }

  async update(
    input: UpdateActionHookSubscriptionInput
  ): Promise<ActionHookSubscription> {
    const variables: Update_Hook_SubscriptionMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: UPDATE_HOOK_SUBSCRIPTION,
        variables: variables,
      }),
    });

    const json: BastaResponse<Update_Hook_SubscriptionMutation> =
      await res.json();

    return json.data.updateActionHookSubscription;
  }

  async getAllLogs(filter: ActionHookFilter): Promise<ActionHookLog[]> {
    const variables: Get_All_LogsQueryVariables = {
      accountId: this._bastaReq.accountId,
      filter,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ALL_LOGS,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_All_LogsQuery> = await res.json();

    return json.data.actionHookLogs.edges.map((x) =>
      mapWebHookLogToWebHookLog(x.node)
    );
  }

  async testActionHook(
    input: ActionHookSubscriptionInput
  ): Promise<TestActionHookResponse> {
    const variables: Test_Hook_SubscriptionMutationVariables = {
      accountId: this._bastaReq.accountId,
      input: input,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: TEST_HOOK_SUBSCRIPTION,
        variables: variables,
      }),
    });

    const json: BastaResponse<Test_Hook_SubscriptionMutation> =
      await res.json();

    return json.data.testActionHook;
  }
}
