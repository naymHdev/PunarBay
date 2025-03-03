"use server";

export const getAllListings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      next: {
        tags: ["LISTING"],
      },
    });

    console.log('res', res);

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
