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
    accountId: item.accountId,
    itemNotes: {
      edges: item.itemNotes.edges.map((x) => ({
        cursor: x.cursor,
        node: {
          created: x.node.created,
          id: x.node.id,
          note: x.node.note,
          userId: x.node.userId,
          user: {
            userId: x.node.user.userId,
            id: x.node.user.userId,
            email: x.node.user.email,
            name: x.node.user.name,
            addresses: x.node.user.addresses,
          },
        },
      })),
      pageInfo: {
        startCursor: item.itemNotes.pageInfo.startCursor,
        endCursor: item.itemNotes.pageInfo.endCursor,
        hasNextPage: item.itemNotes.pageInfo.hasNextPage,
        totalRecords: item.itemNotes.pageInfo.totalRecords,
      },
    },
    tags: item.tags,
    estimates: {
      high: item.estimates?.high,
      low: item.estimates?.low,
    },
    externalId: item.externalId,
    metadata: item.metadata,
    price:
      item.price == null
        ? undefined
        : {
            currency: item.price.currency,
            highEstimate: item.price.highEstimate,
            lowEstimate: item.price.lowEstimate,
            reserve: item.price.reserve,
            startingBid: item.price.startingBid,
          },
    schema: item.schema,
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
    accountId: item.accountId,
    cursor: item.cursor,
    itemNotes: {
      edges: item.itemNotes.edges.map((x) => ({
        cursor: x.cursor,
        node: {
          created: x.node.created,
          id: x.node.id,
          note: x.node.note,
          userId: x.node.userId,
          user: {
            userId: x.node.user.userId,
            id: x.node.user.userId,
            email: x.node.user.email,
            name: x.node.user.name,
            addresses: x.node.user.addresses,
          },
        },
      })),
      pageInfo: {
        startCursor: item.itemNotes.pageInfo.startCursor,
        endCursor: item.itemNotes.pageInfo.endCursor,
        hasNextPage: item.itemNotes.pageInfo.hasNextPage,
        totalRecords: item.itemNotes.pageInfo.totalRecords,
      },
    },
    tags: item.tags,
    estimates: {
      high: item.estimates?.high,
      low: item.estimates?.low,
    },
    externalId: item.externalId,
    metadata: item.metadata,
    price:
      item.price == null
        ? undefined
        : {
            currency: item.price.currency,
            highEstimate: item.price.highEstimate,
            lowEstimate: item.price.lowEstimate,
            reserve: item.price.reserve,
            startingBid: item.price.startingBid,
          },
    schema: item.schema,
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
