/** Properties needed to execute authorized operations */
export type BastaRequest = {
  url: string;
  headers: {
    'Content-Type': string;
    'x-api-key': string;
  };
  accountId: string;
};
