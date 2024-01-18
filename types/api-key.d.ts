/**
 * API key represent a secret key that allows
 * software to access the API on behalf of customer.
 */
export type ApiKey = {
  accountId: string;
  created: string;
  id: string;
  name: string;
  roles: ApiKeyRole[];
};

/**
 * Created API key represent a secret key that allows
 * software programs to access the API on behalf of customers to access the API.
 * Make sure to copy api key now as it will not shown again.
 */
export type ApiKeyCreated = {
  generatedApiKey: string;
  id: string;
  name: string;
  roles: ApiKeyRole[];
};

/** Input object for when creating a API key */
export type ApiKeyInput = {
  /** Name of the API key */
  name: string;
  /** Role associated to API key */
  role: ApiKeyRole[];
};

/** Input object for when revoking a API key */
export type RevokeApiKeyInput = {
  /** API key Id that needs to be revoked */
  apiKeyId: string;
};

/** Role that authorize api keys */
export enum ApiKeyRole {
  /** ADMIN HAS UNRESTRICTED ACCESS */
  Admin = 'ADMIN',
  /** READ HAS READ ONLY ACCESS */
  Read = 'READ',
}
