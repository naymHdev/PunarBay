"use client";

import { CircleUserRound, Heart, Plus, Search } from "lucide-react";
import PBContainer from "../ui/PBContainer";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PBButton from "../ui/PBButton";
import { useUser } from "@/contexts/UserContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IUser } from "@/types/user";
import { getMyProfile } from "@/services/users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllWishlists } from "@/services/wishlist";
import { TLIsting } from "@/types/listings";

const Navbar = () => {
  const [isUser, setIsUser] = useState<IUser | null>(null);
  const [wishlist, setWishlist] = useState<TLIsting[] | null>(null);
  const { user } = useUser();
  // console.log("user", user?._id);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wishlistData = await getAllWishlists();
        setWishlist(wishlistData?.data);
      } catch (error: any) {
        return Error(error);
      }
    };
    fetchData();
  }, []);

  // console.log("wishlist", wishlist);

  return (
    <>
      <div className="shadow-sm bg-white">
        <PBContainer maxWidth="7xl">
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Logo */}
            <div className="flex items-center justify-center sm:justify-start">
              <Link href="/">
                <div className="flex items-center text-4xl">
                  <h2 className=" font-black text-[#1575B9]">Punar</h2>Bay
                </div>
              </Link>
              {/* <div>
                <Link className=" ml-8 text-md font-medium" href="/listings">
                  Products
                </Link>
              </div> */}
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
              {isUser?.isActive && isUser?.email ? (
                <>
                  <Link href="/user/dashboard">
                    <div className=" flex items-center gap-1">
                      {isUser?.profileImage ? (
                        <>
                          <Avatar>
                            <AvatarImage
                              src={isUser?.profileImage}
                              alt="@shadcn"
                            />
                            <AvatarFallback>
                              <CircleUserRound />
                            </AvatarFallback>
                          </Avatar>
                        </>
                      ) : (
                        <CircleUserRound />
                      )}

                      <p className="text-sm font-medium text-foreground">
                        {isUser?.name?.length > 10
                          ? `${isUser?.name?.slice(0, 10)}...`
                          : isUser?.name}
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

              <Link href="/user/my-favourits" legacyBehavior>
                <div className="relative inline-flex items-center justify-center">
                  <Button
                    variant="ghost"
                    className="p-0 m-0 shadow-none border-none hover:cursor-pointer"
                  >
                    <Heart className="text-[#1575B9] size-8" />
                  </Button>
                  {wishlist && wishlist?.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 text-white bg-[#1575B9]  text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                      {wishlist?.length}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default Navbar;
