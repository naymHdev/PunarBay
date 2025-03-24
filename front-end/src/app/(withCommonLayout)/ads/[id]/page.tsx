import PBContainer from "@/components/ui/PBContainer";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";
import FilterSidebar from "@/components/modules/listings/filterSidebar";
import SmallDeviceSidebar from "@/components/modules/listings/filterSidebar/smallDevaiceSidebar";
import ProductCard from "@/components/ui/ProductCard";
import PBPagination from "@/components/ui/core/PBPaginations";

type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type TCategoryProps = {
  searchParams: TSearchParams;
  params: Promise<{ id: string }>;
};

const CategoryBaseAdsPage = async ({
  searchParams,
  params,
}: TCategoryProps) => {
  // const params = await searchParams;
  const query = await searchParams;
  // const page = String(params.page);

  const { id } = await params;

  // Fetch all listings
  const { data: allListings, meta } = await getAllListings(
    query?.page as string,
    undefined,
    query
  );

  // Filter available products
  const availableProducts = allListings?.filter(
    (itm: TLIsting) => itm.status === "available" && itm?.userID !== null
  );

  // Filter products by category
  const categoryProducts = availableProducts?.filter(
    (itm: TLIsting) => itm.categories?._id === id
  );

  // If category products are available, use them; otherwise, fallback to all available products
  const displayedProducts =
    categoryProducts?.length > 0 ? categoryProducts : availableProducts;

  return (
    <>
      <PBContainer className="mt-5" maxWidth="7xl">
        <div className="w-full block md:hidden">
          <SmallDeviceSidebar />
        </div>
        <div className=" flex gap-8">
          <div className=" hidden md:block w-full max-w-[20rem]">
            <FilterSidebar />
          </div>
          <div className="">
            {displayedProducts?.length > 0 ? (
              displayedProducts
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
            {/* Pagination */}
            <div className=" flex items-center justify-end pb-5">
              <PBPagination totalPage={meta.totalPage} />
            </div>
          </div>
        </div>
      </PBContainer>
    </>
  );
};

export default CategoryBaseAdsPage;
