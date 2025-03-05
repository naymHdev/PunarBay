import FilterSidebar from "@/components/modules/listings/filterSidebar";
import PBContainer from "@/components/ui/PBContainer";
import ProductCard from "@/components/ui/ProductCard";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";

type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ListingsPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const query = await searchParams;
  const { data: allListings } = await getAllListings(
    undefined,
    undefined,
    query
  );

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
                allListings
                  .slice()
                  .reverse()
                  .map((product: TLIsting) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default ListingsPage;
