import { LoaderCircle } from "lucide-react";

const PBLoading = () => {
  return (
    <div className="text-center mt-10 text-[#1575B9] font-medium text-lg h-screen flex justify-center items-center">
      <LoaderCircle className="animate-spin w-8 h-8" />
    </div>
  );
};

export default PBLoading;
