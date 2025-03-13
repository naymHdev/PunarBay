"use client";

import { CircleUserRound, Plus, Search } from "lucide-react";
import PBContainer from "../ui/PBContainer";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PBButton from "../ui/PBButton";
import { useUser } from "@/contexts/UserContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const { user } = useUser();
  // console.log("user", user);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <>
      <div className="shadow-sm bg-white">
        <PBContainer maxWidth="7xl">
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Logo */}
            <div className="flex items-center justify-center sm:justify-start">
              <Link href="/">
                <div className="flex items-center text-4xl">
                  <h2 className="font-bold text-[#1575B9]">Punar</h2>Bay
                </div>
              </Link>
              <div>
                <Link className=" ml-8 text-md font-medium" href="/listings">
                  All Ads
                </Link>
                <Link className=" ml-8 text-md font-medium" href="/listings">
                  About
                </Link>
              </div>
            </div>

            {/* Search and Dropdown */}
            <div className="flex justify-center sm:justify-center gap-4">
              <div className="flex w-full items-center border border-[#1575B9] rounded">
                <Input
                  onChange={(e) =>
                    handleSearchQuery("searchTerm", e.target.value)
                  }
                  className="px-3 border-none"
                  type="search"
                  placeholder="Search in All Bangladesh"
                />
                <Link href="/listings">
                  <Button
                    className="bg-[#1575B9] hover:cursor-pointer border-none rounded-none hover:bg-[#1575B9] text-white"
                    type="submit"
                  >
                    <Search />
                  </Button>
                </Link>
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
