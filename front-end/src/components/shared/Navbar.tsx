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
        className={`shadow-sm bg-white self-start sticky z-50 transition-transform duration-300 top-0 left-0 w-full ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <PBContainer maxWidth="7xl">
          <div className="py-2 md:py-4 flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-5 justify-between sm:justify-start">
              <div className="flex items-center text-xl md:text-2xl lg:text-4xl font-black">
                <NavSidebar isUser={isUser} />
                <Link href="/">
                  <h2>
                    <span className=" text-[#1575B9]">Punar</span>Bay
                  </h2>
                </Link>
              </div>
              <div className="bg-[#F3F3F3] px-3 py-2 hidden lg:flex items-center gap-6">
                <nav className="flex space-x-6">
                  {[
                    { href: "/listings", label: "Ads" },
                    { href: "/offers", label: "Offers" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href}>
                      <p
                        className={`text-lg font-semibold hover:text-[#1575B9] ${
                          pathname === href ? "text-[#1575B9]" : "text-black"
                        }`}
                      >
                        {label}
                      </p>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Search and Dropdown */}
            <div className="w-full hidden md:flex justify-center gap-4">
              <div className="flex w-full items-center border border-[#1575B9] rounded-full overflow-hidden">
                <Input
                  onChange={(e) =>
                    handleSearchQuery("searchTerm", e.target.value)
                  }
                  className="px-4 py-2 border-none w-full focus:outline-none"
                  type="search"
                  placeholder="Search in All Bangladesh"
                />
                <Link href="/listings">
                  <Button
                    className=" hover:cursor-pointer border-none rounded-full text-[#1575B9] px-4 py-2 flex items-center justify-center"
                    type="submit"
                  >
                    <Search className="w-8 h-8" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* User and Post Ad Buttons */}
            <div className="flex items-center justify-center sm:justify-end gap-5">
              {isUser?.isActive && isUser?.email ? (
                <>
                  <Link href="/user/dashboard">
                    <div className="hidden md:flex items-center gap-1">
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
                <div className="hidden md:flex items-center gap-2">
                  <CircleUserRound />
                  <Link href="/login" className="text-sm">
                    Login/Register
                  </Link>
                </div>
              )}
              <Link href="/user/my-favourits" legacyBehavior>
                <div className="hidden relative md:inline-flex items-center justify-center">
                  <Button
                    variant="ghost"
                    className="p-0 m-0 shadow-none border-none hover:cursor-pointer"
                  >
                    <Heart className="text-[#1575B9] size-7" />
                  </Button>
                  {wishlist && wishlist?.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 text-white bg-[#1575B9]  text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                      {wishlist?.length}
                    </span>
                  )}
                </div>
              </Link>
              <Link href="/user/post-ad">
                <PBButton className=" text-sm font-normal">
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
