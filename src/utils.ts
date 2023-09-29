import { Account } from '../types/account';
import { Item } from '../types/item';
import { Sale } from '../types/sale';
import { ActionHookLog, ApiToken } from './gql/generated/types';
import {
  Item as _Item,
  Account as _Account,
  Sale as _Sale,
  ActionHookLog as _ActionHookLog,
  ApiToken as _ApiToken,
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
  };
};

export const mapAccountToAccount = (account: _Account): Account => {
  return {
    created: account.created,
    email: account.email,
    id: account.id,
    links: account.links,
    name: account.name,
    description: account.description,
    handle: account.handle,
    imageUrl: account.imageUrl,
    modified: account.modified,
    platformKey: account.platformKey ?? undefined,
    paymentDetails: account.paymentDetails,
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
  };
};

export const mapTokenToToken = (token: _ApiToken): ApiToken => {
  return {
    accountId: token.accountId,
    id: token.id,
    roles: token.roles,
    name: token.name,
  };
};

export const mapWebHookLogToWebHookLog = (
  webHookLog: _ActionHookLog
): ActionHookLog => {
  return {
    id: webHookLog.id,
    accountId: webHookLog.accountId,
    action: webHookLog.action,
    createdAt: webHookLog.createdAt ?? '',
    url: webHookLog.url,
    error: webHookLog.error ?? '',
    executedAt: webHookLog.executedAt ?? '',
    headers: webHookLog.headers,
    response: webHookLog.response ?? '',
    retries: webHookLog.retries ?? undefined,
    status: webHookLog.status ?? undefined,
  };
};
