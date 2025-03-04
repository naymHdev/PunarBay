export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
