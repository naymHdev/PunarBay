export interface IAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
  profileImage?: string;
  address?: IAddress;
  phoneNo?: string;
  gender?: string;
  dateOfBirth?: string;
}
