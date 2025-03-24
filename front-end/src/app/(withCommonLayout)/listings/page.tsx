import FilterSidebar from "@/components/modules/listings/filterSidebar";
import SmallDeviceSidebar from "@/components/modules/listings/filterSidebar/smallDevaiceSidebar";
import PBPagination from "@/components/ui/core/PBPaginations";
import PBContainer from "@/components/ui/PBContainer";
import ProductCard from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";

type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type TListingProps = {
  searchParams: TSearchParams;
  params: Promise<{ id: string }>;
};

const ListingsPage = async ({ searchParams }: TListingProps) => {
  const params = await searchParams;

  const page = String(params.page);
  const query = await searchParams;

  const { data: allListings, meta } = await getAllListings(
    page,
    undefined,
    query
  );

  const availableProduct = allListings?.filter(
    (itm: TLIsting) => itm.status === "available" && itm.userID !== null
  );

  console.log("meta", meta);

  return (
    <>
      <div className=" mt-10">
        <PBContainer maxWidth="7xl">
          <div className="w-full block md:hidden">
            <SmallDeviceSidebar />
          </div>
          <div className=" flex gap-8">
            <div className=" hidden md:block w-full max-w-[20rem]">
              <FilterSidebar />
            </div>
            <div className="">
              {availableProduct ? (
                availableProduct.length > 0 ? (
                  availableProduct
                    .slice()
                    .reverse()
                    .map((product: TLIsting) => (
                      <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                  <p className="font-medium text-center text-[#1575B9] w-full col-span-full">
                    No Product Available!
                  </p>
                )
              ) : (
                // Skeleton Loader
                Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-60 w-full rounded-lg bg-gray-300"
                  />
                ))
              )}

              {/* Pagination */}
              <div className="flex items-center justify-end pb-5">
                <PBPagination totalPage={meta?.totalPage} />
              </div>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default ListingsPage;
