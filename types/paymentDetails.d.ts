export type PaymentDetails = {
  paymentProviderAccountId: string;
  status: PaymentProviderStatus;
};

export enum PaymentProviderStatus {
  Processing = 'PROCESSING',
  Ready = 'READY',
  Started = 'STARTED',
}
