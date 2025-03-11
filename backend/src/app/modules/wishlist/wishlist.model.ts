import { model, Schema } from 'mongoose';
import { TWishlist } from './wishlist.interface';

const WishlistSchema = new Schema<TWishlist>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Listing',
          required: true,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
);

export const Wishlist = model<TWishlist>('Wishlist', WishlistSchema);
