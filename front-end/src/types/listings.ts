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

export type TLIsting = {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: "new" | "used" | "refurbished";
  images: string[];
  categories: TCategory;
  userID: string;
  status: "available" | "sold";
  createdAt: string;
  updatedAt: string;
};
