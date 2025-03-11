import { Types } from 'mongoose';

export type TWishlist = {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  items: {
    productId: Types.ObjectId;
    addedAt: Date;
  }[];
};
