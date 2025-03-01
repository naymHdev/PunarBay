import { UserRole } from '../modules/auth/auth.interface';

export type VerifiedUser = {
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
};
