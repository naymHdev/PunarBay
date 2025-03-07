"use server";

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

    if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);

    return await res.json();
  } catch (error: any) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};
