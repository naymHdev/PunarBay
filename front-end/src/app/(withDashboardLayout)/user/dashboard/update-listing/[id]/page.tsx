import UpdateListingForm from "@/components/modules/dashboard/UpdateListing/UpdateListingForm";
import PBContainer from "@/components/ui/PBContainer";
import { getSingleListing } from "@/services/listings";

const UpdateListingPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data: product } = await getSingleListing(id);

  return (
    <>
      <div className="px-6">
        <PBContainer maxWidth="7xl">
          <div>
            <h2 className=" text-3xl font-semibold">Update Your Ads Now</h2>
          </div>
          <div className=" w-full border-b border-neutral-300 py-4" />

          <UpdateListingForm product={product} />
        </PBContainer>
      </div>
    </>
  );
};

export default UpdateListingPage;
