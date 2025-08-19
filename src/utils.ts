import { ApiKey } from '../types/api-key';
import { Item } from '../types/item';
import { Sale } from '../types/sale';
import { ActionHookLog } from '../types/webhook';
import {
  ActionHookLog as _ActionHookLog,
  ApiKey as _ApiKey,
  Item as _Item,
  Sale as _Sale,
  ItemsEdge,
  SalesEdge,
} from './gql/generated/types';

export const mapSaleToSale = (sale: _Sale): Sale => {
  return {
    accountId: sale.accountId,
    closingTimeCountdown: sale.closingTimeCountdown,
    dates: sale.dates,
    id: sale.id,
    images: sale.images,
    items: sale.items.edges.map((x) => x.node),
    participants: sale.participants.edges.map((x) => x.node),
    sequenceNumber: sale.sequenceNumber,
    title: sale.title ?? '',
    closingMethod: sale.closingMethod,
    description: sale.description ?? '',
    incrementTable: sale.incrementTable,
    status: sale.status,
    cursor: sale.cursor,
  };
};

export const mapPaginatedSalesToSale = (edge: SalesEdge): Sale => {
  const sale = edge.node;
  const page = edge.cursor;

  return {
    accountId: sale.accountId,
    closingTimeCountdown: sale.closingTimeCountdown,
    dates: sale.dates,
    id: sale.id,
    images: sale.images,
    items: sale.items.edges.map((x) => x.node),
    participants: sale.participants.edges.map((x) => x.node),
    sequenceNumber: sale.sequenceNumber,
    title: sale.title ?? '',
    closingMethod: sale.closingMethod,
    description: sale.description ?? '',
    incrementTable: sale.incrementTable,
    status: sale.status,
    cursor: page,
  };
};

export const mapPaginatedItemsToItem = (edge: ItemsEdge): Item => {
  const item = edge.node;
  const page = edge.cursor;

  return {
    id: item.id,
    images: item.images,
    title: item.title ?? '',
    description: item.description ?? '',
    saleId: item.saleId ?? undefined,
    valuationAmount: item.valuationAmount ?? undefined,
    valuationCurrency: item.valuationCurrency ?? undefined,
    cursor: page,
  };
};

export const mapItemToItem = (item: _Item): Item => {
  return {
    id: item.id,
    images: item.images,
    title: item.title ?? '',
    description: item.description ?? '',
    saleId: item.saleId ?? undefined,
    valuationAmount: item.valuationAmount ?? undefined,
    valuationCurrency: item.valuationCurrency ?? undefined,
    cursor: item.cursor,
  };
};

export const mapKeyToKey = (key: _ApiKey): ApiKey => {
  return {
    accountId: key.accountId,
    id: key.id,
    roles: key.roles,
    name: key.name,
    created: key.created,
  };
};

export const mapWebHookLogToWebHookLog = (
  webHookLog: _ActionHookLog
): ActionHookLog => {
  return {
    id: webHookLog.id,
    accountId: webHookLog.accountId,
    action: webHookLog.action,
    createdAt: webHookLog.createdAt,
    url: webHookLog.url,
    error: webHookLog.error,
    executedAt: webHookLog.executedAt,
    headers: webHookLog.headers,
    response: webHookLog.response,
    retries: webHookLog.retries,
    status: webHookLog.status,
    idempotencyKey: webHookLog.idempotencyKey,
    requestPayload: webHookLog.requestPayload,
  };
};
