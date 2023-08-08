import { Image } from './image';

export type Item = {
  /** Id of an item. */
  id: string;
  /** Sale Id, if the item is linked to a sale */
  saleId?: string;
  /** Item title */
  title: string;
  /** Item description */
  description?: string;
  /** Images attached to item */
  images: Image[];
  /** Valuation of the item in minor currency units. */
  valuationAmount?: number;
  /** Valuation currency */
  valuationCurrency?: string;
};
