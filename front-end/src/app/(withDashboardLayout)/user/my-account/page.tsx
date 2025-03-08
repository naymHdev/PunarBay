import MyAccount from "@/components/modules/dashboard/myProfile";
import PBContainer from "@/components/ui/PBContainer";

const MyAccountPage = async () => {
  return (
    <>
      <PBContainer maxWidth="7xl">
        <div className="pb-10">
          <MyAccount />
        </div>
      </PBContainer>
    </>
  );
};

export default MyAccountPage;
