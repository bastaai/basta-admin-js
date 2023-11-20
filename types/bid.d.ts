import { BidStatus, BidType, Bid } from '../src/gql/generated/types';

export { BidType, Bid };

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
