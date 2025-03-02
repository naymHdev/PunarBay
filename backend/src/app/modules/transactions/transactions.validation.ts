import { z } from 'zod';

const TransactionValidationSchema = z.object({
  buyerID: z.string().min(1, 'Buyer ID is required'),
  sellerID: z.string().min(1, 'Seller ID is required'),
  itemID: z.string().min(1, 'Item ID is required'),
  status: z.enum(['pending', 'completed']).default('pending'),
});

export const TransactionValidations = { TransactionValidationSchema };
