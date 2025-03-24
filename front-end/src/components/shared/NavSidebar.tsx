import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types/listings";
import {
  AlignJustify,
  CircleUserRound,
  FolderKanban,
  UserRound,
  X,
  Heart,
  ReceiptText,
  SquarePercent,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PBLoading from "../ui/PBLoading";
import { IUser } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const NavSidebar = ({ isUser }: { isUser: IUser | null }) => {
  const [categories, setCategories] = useState<TCategory[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle("-translate-x-full");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const categoryData = await getAllCategories();
        setCategories(categoryData?.data);
        setIsLoading(false);
      } catch (error: any) {
        return Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  // console.log('categories', categories);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="pr-2">
        <AlignJustify
          className="hover:cursor-pointer md:size-9"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="bg-white fixed top-0 left-0  w-72 transform -translate-x-full transition-transform duration-300 z-50 shadow text-gray-700"
      >
        <div className="flex justify-between shadow-sm px-4 py-3">
          <button className="text-right">
            <p className=" text-xl">
              <span className="text-[#1575B9]">Punar</span>Bay
            </p>
          </button>
          <X onClick={toggleSidebar} />
        </div>
        <div className="h-screen overflow-auto scroll-smooth">
          <div className="p-3 border-b border-neutral-300 text-sm font-medium">
            <div className="flex items-center gap-2">
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
            </div>
          </div>
          <div className="p-4 border-b border-neutral-300 space-y-4 font-medium text-sm">
            <div className="flex items-center gap-2">
              <UserRound />
              <Link href="/user/my-account">My Accounts</Link>
            </div>
            <div className="flex items-center gap-2">
              <Heart />
              <Link href="/user/my-favourits">Wishlist</Link>
            </div>
            <div className="flex items-center gap-2">
              <FolderKanban />
              <Link href="/user/dashboard">My Listings</Link>
            </div>
            <div className="flex items-center gap-2">
              <SquarePercent />
              <Link href="/offers">Offers</Link>
            </div>
            <div className="flex items-center gap-2">
              <ReceiptText />
              <Link href="/about">About Us</Link>
            </div>
          </div>
          <section className="p-4">
            <h3 className=" font-semibold text-lg uppercase">Categories</h3>
            <div className=" space-y-4 mt-4">
              {isLoading ? (
                <PBLoading />
              ) : (
                categories &&
                categories?.map((category: TCategory, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm font-normal hover:text-[#1575B9]"
                  >
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <Link href={`/ads/${category._id}`}>{category.name}</Link>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NavSidebar;
