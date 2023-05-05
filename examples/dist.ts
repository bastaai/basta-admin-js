import BastaAdmin, { Sale } from '../dist';

const bastaAdmin: BastaAdmin = new BastaAdmin('sk', 'accid');

const sale: Sale = await bastaAdmin.sale.create();
