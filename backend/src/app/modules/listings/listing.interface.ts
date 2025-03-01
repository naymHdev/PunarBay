import mongoose, { Document } from 'mongoose';

export interface IListing extends Document {
  title: string;
  description: string;
  price: number;
  condition: 'new' | 'used' | 'refurbished';
  images: string[];
  userID: mongoose.Types.ObjectId;
  status: 'available' | 'sold';
}
