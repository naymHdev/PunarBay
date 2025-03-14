import { model, Schema } from 'mongoose';
import { IListing } from './listing.interface';

const ListingSchema = new Schema<IListing>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    condition: {
      type: String,
      enum: ['new', 'used', 'refurbished'],
      required: true,
    },
    images: {
      type: [String],
      required: [true, 'Product images are required'],
    },
    categories: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Login first than post your ad!'],
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      enum: ['available', 'sold'],
      default: 'available',
    },
  },
  { timestamps: true },
);

export const Listing = model<IListing>('Listing', ListingSchema);
