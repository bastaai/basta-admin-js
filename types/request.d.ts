export type BastaFetchReq = {
  url: string;
  headers: {
    'Content-Type': string;
    'x-api-key': string;
  };
  accountId: string;
};
