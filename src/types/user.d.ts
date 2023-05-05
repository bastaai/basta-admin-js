import { UserToken as UserTokenGql } from '../gql/generated/types';

export type UserToken = Pick<UserTokenGql, 'expirationDate' | 'token'>;
