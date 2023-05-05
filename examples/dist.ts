import BastaAdmin, { Sale } from '../dist/src';

const bastaAdmin: BastaAdmin = new BastaAdmin('sk', 'accid');

const sale: Sale = await bastaAdmin.sale.create();
bastaAdmin.user.refreshUserToken();
