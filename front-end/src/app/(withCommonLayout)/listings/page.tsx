import FilterSidebar from "@/components/modules/listings/filterSidebar";
import PBContainer from "@/components/ui/PBContainer";
import ProductCard from "@/components/ui/ProductCard";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";

const ListingsPage = async () => {
  const { data: allListings } = await getAllListings();

  return (
    <>
      <div className=" mt-10">
        <PBContainer>
          <div className=" flex gap-8">
            <div className=" w-full max-w-[20rem]">
              <FilterSidebar />
            </div>
            <div className="">
              {allListings &&
                allListings.map((product: TLIsting, idx: number) => (
                  <ProductCard product={product} />
                ))}
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default ListingsPage;
