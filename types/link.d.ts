import { LinkType } from '../src/gql/generated/types';

export type Link = {
  type: LinkType;
  url: string;
};

export type LinkInput = {
  type: LinkType;
  url: string;
};
