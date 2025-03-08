import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/types/user";
import { Plus } from "lucide-react";
import Link from "next/link";

const MyAddress = ({ isUser }: { isUser: IUser | null }) => {
  return (
    <>
      <div className="">
        <Card className="w-full border-none shadow-none p-0 m-0">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex justify-between">
              Information
              <Link href="/user/my-account/update">
                <Button
                  variant="outline"
                  className="border-[#1A78BA] hover:cursor-pointer text-[#1A78BA]"
                >
                  Add/Update
                  <Plus />
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-0 md:flex justify-between ">
            <div>
              <p className="text-sm font-semibold text-gray-500">Address</p>
              <p className="text-base">
                {isUser?.address?.street || "N/A"}, {isUser?.address?.city}
              </p>
              <p className="text-base">
                {isUser?.address?.state || "N/A"}, {isUser?.address?.postalCode}
              </p>
              <p className="text-base">{isUser?.address?.country || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">Gender</p>
              <p className="text-base">{isUser?.gender || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Phone Number
              </p>
              <p className="text-base">{isUser?.phoneNo || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Date of Birth
              </p>
              <p className="text-base">
                {isUser?.dateOfBirth
                  ? new Date(isUser.dateOfBirth).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MyAddress;
