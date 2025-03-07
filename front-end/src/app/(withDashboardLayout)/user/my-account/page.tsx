import MyAccount from "@/components/modules/dashboard/myProfile";
import PBContainer from "@/components/ui/PBContainer";

const MyAccountPage = async () => {
  return (
    <>
      <PBContainer maxWidth="7xl">
        <MyAccount />
      </PBContainer>
    </>
  );
};

export default MyAccountPage;
