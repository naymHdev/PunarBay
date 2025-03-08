"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getMyProfile = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["USER"],
      },
    });

    return await res.json();
  } catch (error: any) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};

export const updateProfile = async (
  id: string,
  userData: FormData
): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`, {
      method: "PUT",
      body: userData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });

    revalidateTag("USER");
    return await res.json();
  } catch (error: any) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });

    revalidateTag("USER");
    return await res.json();
  } catch (error: any) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};
