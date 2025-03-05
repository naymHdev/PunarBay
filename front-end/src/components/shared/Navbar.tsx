"use client";

import { CircleUserRound, Plus, Search } from "lucide-react";
import PBContainer from "../ui/PBContainer";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PBButton from "../ui/PBButton";
import {
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const { user } = useUser();
  // console.log("user", user);

  return (
    <>
      <div className="shadow">
        <PBContainer maxWidth="7xl">
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start">
              <div className="flex items-center text-4xl">
                <h2 className="font-bold text-[#1575B9]">Punar</h2>Bay
              </div>
            </div>

            {/* Search and Dropdown */}
            <div className="flex justify-center sm:justify-center gap-4">
              <div className="flex gap-2 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    BD
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-none shadow-md">
                    <DropdownMenuLabel>Type Your City Name</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border border-neutral-300" />
                    <DropdownMenuLabel>Dhaka</DropdownMenuLabel>
                    <DropdownMenuLabel>Panchagarh</DropdownMenuLabel>
                    <DropdownMenuLabel>Rajsahi</DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex w-full items-center border border-[#1575B9] rounded">
                <Input
                  className="px-3 border-none"
                  type="search"
                  placeholder="Search in All Bangladesh"
                />
                <Button
                  className="bg-[#1575B9] border-none rounded-none hover:bg-[#1575B9] text-white"
                  type="submit"
                >
                  <Search />
                </Button>
              </div>
            </div>

            {/* User and Post Ad Buttons */}
            <div className="flex items-center justify-center sm:justify-end gap-5">
              {user?.isActive && user.email ? (
                <>
                  <Link href="/user/dashboard">
                    <div className=" flex items-center gap-1">
                      <CircleUserRound />
                      <p className="text-sm font-medium text-foreground">
                        {user.name.length > 10
                          ? `${user.name.slice(0, 10)}...`
                          : user.name}
                      </p>
                    </div>
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <CircleUserRound />
                  <Link href="/login" className="text-sm">
                    Login/Register
                  </Link>
                </div>
              )}

              <Link href="/user/post-ad">
                <PBButton>
                  Post Free Ad <Plus />
                </PBButton>
              </Link>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default Navbar;
