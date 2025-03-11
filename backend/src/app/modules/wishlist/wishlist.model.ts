import { model, Schema } from 'mongoose';
import { TWishlist } from './wishlist.interface';

const WishlistSchema = new Schema<TWishlist>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Listing',
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

export const Wishlist = model<TWishlist>('Wishlist', WishlistSchema);
