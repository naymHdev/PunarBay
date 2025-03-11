import { Types } from 'mongoose';

type TProduct = {
  product: Types.ObjectId;
};

export type TWishlist = {
  user: Types.ObjectId;
  products: TProduct[];
  createdAt?: Date;
  updatedAt?: Date;
};
