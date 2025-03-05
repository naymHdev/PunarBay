import { TCategory } from "@/types/listings";
import Image from "next/image";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <div className="bg-white rounded-2xl w-52 h-52 flex flex-col items-center justify-evenly shadow p-4">
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
