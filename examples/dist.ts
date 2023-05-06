import BastaAdmin from '../dist';
import { Sale } from '../types';

const bastaAdmin: BastaAdmin = new BastaAdmin('sk', 'accid');

const sale: Sale = await bastaAdmin.sale.get();
sale.accountId;
