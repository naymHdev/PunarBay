import ManageListings from "@/components/modules/listings";
import PBContainer from "@/components/ui/PBContainer";
import { getAllListings } from "@/services/listings";

const UserDashboardPage = async () => {
  const { data: allListings } = await getAllListings();

  // console.log('allListings', allListings);

  return (
    <>
      <PBContainer maxWidth="7xl">
        <ManageListings allListings={allListings} />
      </PBContainer>
    </>
  );
};

export default UserDashboardPage;
