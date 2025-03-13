"use client";

import { TCategory } from "@/types/listings";
import Image from "next/image";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryCard = ({ category }: { category: TCategory }) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const handleSearchQuery = (query: string, value: string | number) => {
  //   const params = new URLSearchParams(useSearchParams.toString());

  //   // console.log("params", params);

  //   params.set(query, value.toString());

  //   router.push(`/listings`, {
  //     scroll: false,
  //   });
  // };

  return (
    <div className="bg-white rounded-2xl hover:cursor-pointer w-52 h-52 flex flex-col items-center justify-evenly shadow p-4">
      <Image
        src={category?.icon}
        width={100}
        height={100}
        alt="Category Icon"
        className="object-contain"
      />
      <h3 className="font-medium text-center truncate w-full">
        {category?.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
