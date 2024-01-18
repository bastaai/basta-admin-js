export enum LinkType {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  X = 'X',
  Youtube = 'YOUTUBE',
}

export type Link = {
  type: LinkType;
  url: string;
};

export type LinkInput = {
  type: LinkType;
  url: string;
};
