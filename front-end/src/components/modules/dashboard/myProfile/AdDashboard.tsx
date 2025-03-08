import { Button } from "@/components/ui/button";

const AdDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* My Free Ads */}
      <div className="border border-b-[#1A78BA] border-neutral-200 bg-white rounded-lg pb-5">
        <div className="bg-[#EAF2E7] py-3">
          <h2 className="text-md font-semibold text-center">My Free Ads</h2>
        </div>
        <div className="flex justify-center my-6">
          <div className="text-4xl font-bold text-green-600 border-2 border-green-500 rounded-full w-20 h-20 flex items-center justify-center">
            0
          </div>
        </div>
        <div className="text-gray-700 space-y-3">
          <p className="flex justify-between px-5">
            <span>My Active Ads</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
          <p className="flex justify-between px-5">
            <span>My Expired Ads</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
        </div>
        <div className="w-9/12 mx-auto">
          <Button
            variant="outline"
            className="w-full mt-4 py-2 border-none bg-yellow-400 hover:bg-yellow-500 rounded-lg"
          >
            Manage My Ads
          </Button>
        </div>
      </div>

      {/* My Premium Ads */}
      <div className="border border-b-[#a32ced] border-neutral-200 bg-white rounded-lg pb-5">
        <div className="bg-[#EEE6F3] py-3">
          <h2 className="text-md font-semibold text-center">My Premium Ads</h2>
        </div>
        <div className="flex justify-center my-6">
          <div className="text-4xl font-bold text-green-600 border-2 border-green-500 rounded-full w-20 h-20 flex items-center justify-center">
            0
          </div>
        </div>
        <div className="text-gray-700 space-y-3">
          <p className="flex justify-between px-5">
            <span>My Payment Details</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
          <p className="flex justify-between px-5">
            <span>My Ad Credit Details</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
        </div>
        <div className="w-9/12 mx-auto">
          <Button
            variant="outline"
            className="w-full mt-4 py-3 border-none bg-[#1A78BA] hover:bg-[#1A78BA] text-white"
          >
            Manage Premium Ads
          </Button>
        </div>
      </div>

      {/* Total Active Ad Packs */}
      <div className="border border-b-[#97472c] border-neutral-200 bg-white rounded-lg pb-5">
        <div className="bg-[#FDEEE9] py-3">
          <h2 className="text-md font-semibold text-center">
            Total Active Ad Packs
          </h2>
        </div>
        <div className="flex justify-center my-6">
          <div className="text-4xl font-bold text-green-600 border-2 border-green-500 rounded-full w-20 h-20 flex items-center justify-center">
            0
          </div>
        </div>
        <div className="text-gray-700 space-y-3">
          <p className="flex justify-between px-5">
            <span>Total Credits</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
          <p className="flex justify-between px-5">
            <span>Credits Remaining</span> <span>0</span>
          </p>
          <div className=" border-b border-neutral-300" />
        </div>
        <div className="w-9/12 mx-auto">
          <Button
            variant="outline"
            className="w-full mt-4 py-3 border-none bg-[#1A78BA] hover:bg-[#1A78BA] text-white"
          >
            Manage My Credits
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdDashboard;
