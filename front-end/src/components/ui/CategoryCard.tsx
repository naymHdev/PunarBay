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
    <div className="bg-white rounded-2xl hover:cursor-pointer w-52 h-52 flex flex-col items-center justify-evenly p-4 border border-neutral-200">
      <div className="relative w-full h-28 flex items-center justify-center">
        <Image
          src={category?.icon}
          alt="Category Icon"
          fill
          className="object-contain"
        />
      </div>
      <h3 className="font-medium text-center truncate w-full text-gray-800">
        {category?.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
