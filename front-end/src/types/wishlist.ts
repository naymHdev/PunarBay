import { TLIsting } from "./listings";

export type TWishlist = {
  products: { product: string }[];
};

export type TWishlistProduct = {
  _id: string;
  product: TLIsting;
};
