import { BastaAdmin, Sale } from '../dist';

const bastaAdmin: BastaAdmin = new BastaAdmin('sk');

const sale: Sale = await bastaAdmin.sale.create();
