import { z } from 'zod';

const listingValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters long')
      .max(100),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long'),
    price: z.number().min(0, 'Price must be a positive number'),
    condition: z.enum(['new', 'used', 'refurbished']),
    userID: z.string({ required_error: 'Invalid User ID' }),
    status: z.enum(['available', 'sold']).default('available'),
    categories: z
      .string({
        required_error: 'Category ID is required',
      })
      .min(1, 'Category ID cannot be empty'),
  }),
});

const listingUpdateValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters long')
      .max(100)
      .optional(),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long')
      .optional(),
    price: z.number().min(0, 'Price must be a positive number').optional(),
    condition: z.enum(['new', 'used', 'refurbished']).optional(),
    userID: z.string({ required_error: 'Invalid User ID' }).optional(),
    status: z.enum(['available', 'sold']).default('available').optional(),
  }),
});

export const ListingValidations = {
  listingValidationSchema,
  listingUpdateValidationSchema,
};
