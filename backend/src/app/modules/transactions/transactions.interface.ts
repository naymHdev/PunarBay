import mongoose, { Document } from 'mongoose';

export interface ITransaction extends Document {
  buyerID: mongoose.Schema.Types.ObjectId;
  sellerID: mongoose.Schema.Types.ObjectId;
  itemID: mongoose.Schema.Types.ObjectId;
  status: 'pending' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
}
