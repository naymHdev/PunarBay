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
    phoneNumber: z.string().optional(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum([UserRole.USER, UserRole.ADMIN]).default(UserRole.USER),
    userInfo: UserInfoSchema,
  }),
});

export const UserValidation = {
  userValidationSchema,
};
