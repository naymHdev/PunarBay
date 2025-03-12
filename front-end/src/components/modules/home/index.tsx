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
      <div className=" mt-10">
        <PBContainer maxWidth="7xl">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h2 className=" text-lg font-semibold">Top Selling Category</h2>
            <Link href="/listings">
              <PBButton>
                View All <ArrowRight />
              </PBButton>
            </Link>
          </div>
          <div className="mt-4 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
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
