import mongoose, { Document } from 'mongoose';

export type ConditionType = 'new' | 'used' | 'refurbished';

export interface IListing extends Document {
  title: string;
  description: string;
  price: number;
  condition: ConditionType;
  images: string[];
  userID: mongoose.Types.ObjectId;
  status: 'available' | 'sold';
}
