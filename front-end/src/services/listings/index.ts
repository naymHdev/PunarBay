"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// add product
export const addListig = async (productData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value || "",
      },
    });
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllListings = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append("maxPrice", "0");
    params.append("maxPrice", query?.price.toString());
  }

  if (query?.categories) {
    params.append("categories", query?.categories.toString());
  }

  if (query?.condition) {
    params.append("condition", query?.condition.toString());
  }

  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ["LISTING"],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single product
export const getSingleListing = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        next: {
          tags: ["LISTING"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
