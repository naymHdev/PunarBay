import CategoryCard from "@/components/ui/CategoryCard";
import PBButton from "@/components/ui/PBButton";
import PBContainer from "@/components/ui/PBContainer";
import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types/listings";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedCategories = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <>
      <div className="mt-4 md:mt-10">
        <PBContainer maxWidth="7xl">
          <div className="flex items-center justify-between">
            <h2 className=" text-lg font-semibold">Top Selling Categories</h2>
            <Link href="/listings">
              <PBButton>
                View All <ArrowRight />
              </PBButton>
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4">
            {categories?.map((category: TCategory, idx: number) => (
              <CategoryCard key={idx} category={category} />
            ))}
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default FeaturedCategories;
