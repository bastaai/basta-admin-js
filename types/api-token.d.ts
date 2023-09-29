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

export type ApiTokenConnection = {
  /** Edges */
  edges: Array<ApiTokensEdge>;
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

/** Input object for when creating a API token */
export type ApiTokenInput = {
  /** Name of the API token */
  name: string;
  /** Role associated to API token */
  role: Array<ApiTokenRole>;
};

/** Role that authorize api tokens */
export enum ApiTokenRole {
  /** ADMIN HAS UNRESTRICTED ACCESS */
  Admin = 'ADMIN',
  /** READ HAS READ ONLY ACCESS */
  Read = 'READ',
}

export type ApiTokensEdge = {
  /** Current cursor */
  cursor: string;
  /** Current node */
  node: ApiToken;
};
