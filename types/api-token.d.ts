import { ApiTokenRole } from '../src/gql/generated/types';

/**
 * API token represent a token that allows
 * customers to access the API in machine and machine manner.
 */
export type ApiToken = {
  accountId: string;
  id: string;
  name: string;
  roles: ApiTokenRole[];
};

/**
 * Created API token represent a token that allows
 * customers to access the API in machine and machine manner and includes
 * the API key that the caller needs to write down (not able to see the key again)
 */
export type ApiTokenCreated = {
  generatedApiKey: string;
  id: string;
  name: string;
  roles: Array<ApiTokenRole>;
};
