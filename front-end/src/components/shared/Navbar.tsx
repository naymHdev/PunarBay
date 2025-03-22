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
import NavSidebar from "./NavSidebar";

const Navbar = () => {
  const [isUser, setIsUser] = useState<IUser | null>(null);
  const [wishlist, setWishlist] = useState<TLIsting[] | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user } = useUser();
  // console.log("isUser", isUser);

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

  // Cretate navbar scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling down → Show Navbar
        setIsVisible(true);
      } else {
        // Scrolling up → Hide Navbar
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`shadow-sm bg-white self-start sticky z-50 transition-transform duration-300 top-0 left-0 w-full ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >

        <PBContainer maxWidth="7xl">
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Logo */}
            <div className="flex items-center justify-between sm:justify-start">
              <div className="flex items-center text-4xl font-black">
                <NavSidebar />
                <Link href="/">
                  <h2><span className=" text-[#1575B9]">Punar</span>Bay</h2>
                </Link>
              </div>
              <div>
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
