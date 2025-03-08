import UpdateAddressForm from "@/components/modules/dashboard/myProfile/UpdateAddressForm";
import PBContainer from "@/components/ui/PBContainer";

const UpdateAccountPage = async () => {
  return (
    <>
      <PBContainer maxWidth="7xl">
        <div className=" mb-10">
          <UpdateAddressForm />
        </div>
      </PBContainer>
    </>
  );
};

export default UpdateAccountPage;
