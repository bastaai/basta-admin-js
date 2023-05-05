import { UserToken as UserTokenGql } from '../src/gql/generated/types';

export type UserToken = Pick<UserTokenGql, 'expirationDate' | 'token'>;
