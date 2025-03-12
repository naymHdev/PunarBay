"use server";

import { TWishlist } from "@/types/wishlist";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addWishlist = async (wishlistData: TWishlist): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlists`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishlistData),
    });

    revalidateTag("WISHLIST");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllWishlists = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlists`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value || "",
        "Content-Type": "application/json",
      },
      next: {
        tags: ["WISHLIST"],
      },
      cache: "no-store",
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteWishlist = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/wishlists/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value || "",
        },
      }
    );
    revalidateTag("LISTING");

    return await res.json();
  } catch (error: any) {
    return new Error(error.message);
  }
};
