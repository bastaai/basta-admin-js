import { PaymentProviderStatus } from '../src/gql/generated/types';

export type PaymentDetails = {
  paymentProviderAccountId: string;
  status: PaymentProviderStatus;
};
