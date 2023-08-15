export type Link = {
  type: LinkType;
  url: string;
};

export type LinkInput = {
  type: LinkType;
  url: string;
};

export enum LinkType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
}
