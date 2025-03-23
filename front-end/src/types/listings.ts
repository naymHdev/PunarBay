import { JSX } from "react";

export type TCategory = {
  _id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  parent: string | null;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  lastLogin: Date;
  isActive: boolean;
};

export type TLIsting = {
  map(arg0: (product: TLIsting) => JSX.Element): import("react").ReactNode;
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: "new" | "used" | "refurbished";
  images: string[];
  categories: TCategory;
  userID: TUser;
  location?: string;
  status: "available" | "sold";
  createdAt: string;
  updatedAt: string;
};
