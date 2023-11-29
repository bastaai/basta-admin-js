export enum PaymentProviderStatus {
  /** Account has finished onboarding for payment provider and details are being processed. */
  Processing = 'PROCESSING',
  /** Account has finished onboarding and details have been processed and confirmed. */
  Ready = 'READY',
  /** Account has started onboarding for payment provider but not finished. */
  Started = 'STARTED',
}

export type PaymentDetails = {
  paymentProviderAccountId: string;
  status: PaymentProviderStatus;
};
