import FilterSidebar from "@/components/modules/listings/filterSidebar";
import SmallDeviceSidebar from "@/components/modules/listings/filterSidebar/smallDevaiceSidebar";
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

  const availableProduct = allListings?.filter(
    (itm: TLIsting) => itm.status === "available" && itm.userID !== null
  );

  return (
    <>
      <div className=" mt-10">
        <PBContainer>
          <div className="w-full block md:hidden">
            <SmallDeviceSidebar />
          </div>
          <div className=" flex gap-8">
            <div className=" hidden md:block w-full max-w-[20rem]">
              <FilterSidebar />
            </div>
            <div className="">
              {availableProduct?.length > 0 ? (
                availableProduct
                  .slice()
                  .reverse()
                  .map((product: TLIsting) => (
                    <ProductCard key={product._id} product={product} />
                  ))
              ) : (
                <p className=" font-medium text-center text-[#1575B9]">
                  No Product Available!
                </p>
              )}
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default ListingsPage;
