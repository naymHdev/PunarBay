"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { getMyProfile } from "@/services/users";
import { IUser } from "@/types/user";
import { Pencil, User, WalletMinimal } from "lucide-react";
import { useEffect, useState } from "react";

const MyAccount = () => {
  const [isUser, setIsUser] = useState<IUser | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.userId) return;

    const fetchData = async () => {
      try {
        const userData = await getMyProfile(user.userId);
        setIsUser(userData.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [user?.userId]);

  //   console.log("isUser__", isUser);

  return (
    <>
      <section className=" bg-white p-6 rounded-2xl">
        <div className="flex justify-between">
          <div className=" flex  gap-4">
            <div className=" rounded-full border border-neutral-300 bg-gray-100 h-20 w-20 flex items-center justify-center">
              <User size={32} />
            </div>
            <div>
              <h2 className=" text-2xl font-medium">{isUser?.name}</h2>
              <h2 className=" text-sm font-2nd mt-1">{isUser?.email}</h2>
            </div>
          </div>
          <div>
            <Button className=" border border-[#1A78BA] text-[#1A78BA]">
              <Pencil /> Edit
            </Button>
          </div>
        </div>
        <div className=" border-b border-neutral-300 my-5" />
        <div className=" flex items-center gap-3">
          <WalletMinimal className="text-[#1A78BA] size-8" />
          <h3 className=" text-md font-2nd">
            <span className="font-bold">TK 1,9000</span> Your Current Balance in
            PBay-CASH
          </h3>
          <Button className=" ml-6 border border-[#1A78BA] text-[#1A78BA]">
            View
          </Button>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
