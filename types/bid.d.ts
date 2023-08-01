import { BidStatus, BidType } from '../src/gql/generated/types';

export { BidType };

export type BidResponse =
  | {
      bid: {
        amount: number;
        bidId: string;
        bidStatus: BidStatus;
        bidType: BidType;
        date: string;
        maxAmount: number;
      };
      success: true;
    }
  | {
      bid: undefined;
      success: false;
    };
