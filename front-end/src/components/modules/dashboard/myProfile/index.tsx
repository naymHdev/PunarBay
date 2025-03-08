"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { deleteUser, getMyProfile } from "@/services/users";
import { IUser } from "@/types/user";
import { EllipsisVertical, User, WalletMinimal } from "lucide-react";
import { useEffect, useState } from "react";
import AdDashboard from "./AdDashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MyAddress from "./MyAddress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { logout } from "@/services/auth";

const MyAccount = () => {
  const [isUser, setIsUser] = useState<IUser | null>(null);
  const { user } = useUser();
  // console.log("user__", user);

  useEffect(() => {
    if (!user?._id) return;

    const fetchData = async () => {
      try {
        const userData = await getMyProfile(user?._id);
        setIsUser(userData.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [user?._id]);

  const handleDeleteAccount = async (userId: string) => {
    if (!userId) {
      toast.error("User ID is missing!");
      return;
    }

    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      const res = await deleteUser(user?._id as string);

      // console.log("res", res);

      if (res.success) {
        logout();
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }

      // Redirect user to homepage after account deletion
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error: any) {
      toast.error(
        error.message || "An error occurred while deleting the account."
      );
    }
  };

  return (
    <>
      <section className=" bg-white p-4 md:p-5 rounded-2xl border border-neutral-200">
        <div className="flex justify-between">
          <div className=" flex  gap-4">
            <div className=" rounded-full border border-neutral-200 bg-gray-100 h-20 w-20 flex items-center justify-center">
              {isUser?.profileImage ? (
                <>
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={isUser?.profileImage} />
                    <AvatarFallback>
                      <User size={32} />
                    </AvatarFallback>
                  </Avatar>
                </>
              ) : (
                <>
                  <User size={32} />
                </>
              )}
            </div>
            <div>
              <h2 className=" text-2xl font-medium">{isUser?.name}</h2>
              <h2 className=" text-sm font-2nd mt-1">{isUser?.email}</h2>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical className="text-[#1A78BA]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" bg-gray-100 border-neutral-300">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    onClick={() =>
                      isUser?._id && handleDeleteAccount(isUser._id)
                    }
                    disabled={!isUser?._id}
                    className=" text-white hover:cursor-pointer bg-red-500 hover:bg-red-700"
                  >
                    Delete Account
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className=" border-b border-neutral-200 my-5" />
        <div className=" flex items-center gap-3">
          <WalletMinimal className="text-[#1A78BA] size-8" />
          <h3 className=" text-md font-2nd">
            <span className="font-bold">TK 1,9000</span> Your Current Balance in
            PBay-CASH
          </h3>
          <Button
            variant="outline"
            className=" ml-6 border-[#1A78BA] text-[#1A78BA]"
          >
            View
          </Button>
        </div>
      </section>

      {/* Address Section */}
      <section className="mt-8 z-50 bg-white p-4 md:p-5 rounded-2xl border border-neutral-200">
        <MyAddress isUser={isUser} />
      </section>
      <section className="mt-8">
        <AdDashboard />
      </section>
    </>
  );
};

export default MyAccount;
