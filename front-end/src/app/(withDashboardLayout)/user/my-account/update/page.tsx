import UpdateAddressForm from "@/components/modules/dashboard/myProfile/UpdateAddressForm";
import PBContainer from "@/components/ui/PBContainer";

const UpdateAccountPage = async () => {
  return (
    <>
      <PBContainer maxWidth="7xl">
        <div className=" p-6">
          <UpdateAddressForm />
        </div>
      </PBContainer>
    </>
  );
};

export default UpdateAccountPage;
