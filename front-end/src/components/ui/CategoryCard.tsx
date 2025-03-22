"use client";

import { TCategory } from "@/types/listings";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: TCategory }) => {

  return (
    <Link href={`/ads/${category._id}`}>
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
    </Link>
  );
};

export default CategoryCard;
