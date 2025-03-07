import { z } from 'zod';
import { UserRole } from './auth.interface';

const UserInfoSchema = z.object({
  device: z.enum(['pc', 'mobile']).optional().default('pc'), // Allow only 'pc' or 'mobile'
  browser: z.string().min(1, 'Browser name is required'),
  ipAddress: z.string().min(1, 'IP address is required'),
  pcName: z.string().optional(), // Optional field
  os: z.string().optional(), // Optional field
  userAgent: z.string().min(1, 'User agent is required'),
});

const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum([UserRole.USER, UserRole.ADMIN]).default(UserRole.USER),
    userInfo: UserInfoSchema,
  }),
});

const userUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    phoneNo: z
      .string()
      .regex(/^\d{11}$/, 'Phone number must be exactly 11 digits long')
      .optional(),
    gender: z.enum(['Male', 'Female', 'Other']).default('Other').optional(),
    dateOfBirth: z
      .string()
      .optional()
      .refine((value) => !value || !isNaN(Date.parse(value)), {
        message: 'Invalid date format. Must be a valid date.',
      })
      .optional(),
    profileImage: z.string().optional(),
    address: z
      .object({
        street: z.string().min(1, 'Street is required').optional(),
        city: z.string().min(1, 'City is required').optional(),
        state: z.string().min(1, 'State is required').optional(),
        postalCode: z.string().min(1, 'Postal code is required').optional(),
        country: z.string().min(1, 'Country is required').optional(),
      })
      .optional(),
  }),
});

export const AuthValidation = {
  userValidationSchema,
  userUpdateValidationSchema,
};
