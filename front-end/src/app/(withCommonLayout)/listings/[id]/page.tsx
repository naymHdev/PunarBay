import ListingDetails from "@/components/modules/listings/listingDetails";
import PBContainer from "@/components/ui/PBContainer";
import { getSingleListing } from "@/services/listings";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data: product } = await getSingleListing(id);

  return (
    <div>
      <PBContainer maxWidth="7xl">
        <div>
          <ListingDetails product={product} />
        </div>
      </PBContainer>
    </div>
  );
};

export default ProductDetailsPage;
