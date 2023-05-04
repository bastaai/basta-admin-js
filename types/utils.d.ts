import { Maybe, Scalars } from '../src/gql/generated';

export type ToPrimitive<T> = Omit<
  ReplaceScalars<ReplaceMaybe<T>>,
  '__typename'
>;

type ReplaceMaybe<T> = {
  [K in keyof T]: T[K] extends Maybe<infer U> ? U : T[K];
};

type ReplaceScalars<T> = {
  [K in keyof T]: T[K] extends keyof Scalars ? Scalars[T[K]] : T[K];
};
