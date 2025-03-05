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

export const getAllListings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      next: {
        tags: ["LISTING"],
      },
    });

    console.log("res", res);

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
