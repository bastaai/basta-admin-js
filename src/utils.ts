import { Account } from '../types/account';
import { Sale } from '../types/sale';
import { Account as _Account, Sale as _Sale } from './gql/generated/types';

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
  };
};
