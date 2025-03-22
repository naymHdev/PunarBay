import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types/listings";
import { AlignJustify, CircleUserRound, FolderKanban, UserRound, X, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NavSidebar = () => {
    const [categories, setCategories] = useState<TCategory[] | null>([])
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        if (sidebarRef.current) {
            sidebarRef.current.classList.toggle("-translate-x-full");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryData = await getAllCategories();
                setCategories(categoryData?.data);
            } catch (error: any) {
                return Error(error);
            }
        };
        fetchData();
    }, []);

    console.log('categories', categories);

    return (
        <>
            {/* Sidebar Toggle Button */}
            <div className="p-2">
                <AlignJustify
                    className="hover:cursor-pointer"
                    size={32}
                    onClick={toggleSidebar}
                />
            </div>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className="bg-white fixed top-0 left-0  w-64 transform -translate-x-full transition-transform duration-300 z-50 shadow text-gray-700"
            >
                <div className="flex justify-between border-b border-neutral-300 shadow px-4 py-2">
                    <button
                        className="text-right"
                        onClick={toggleSidebar}
                    >
                        <p className=" text-xl"><span className="text-[#1575B9]">Punar</span>Bay</p>
                    </button>
                    <X />
                </div>
                <div className="h-screen overflow-auto scroll-smooth">
                    <div className="p-3 border-b border-neutral-300">
                        <div className="flex items-center gap-2">
                            <CircleUserRound />
                            <Link href="/login" className="text-sm">
                                Login/Register
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 border-b border-neutral-300 space-y-4 font-medium text-sm">
                        <div className="flex items-center gap-2">
                            <UserRound />
                            <Link href="/user/my-account">
                                My Accounts
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart />
                            <Link href="/user/my-favourits">
                                Wishlist
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FolderKanban />
                            <Link href="/user/dashboard">
                                My Listings
                            </Link>
                        </div>
                    </div>
                    <section className="p-4">
                        <h3 className=" font-semibold text-lg uppercase">Categories</h3>
                        <div className=" space-y-4 mt-4">
                            {
                                categories && categories?.map((category: TCategory, idx: number) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-normal hover:text-[#1575B9]">
                                        <div className="w-8 h-8 relative rounded-full overflow-hidden">
                                            <Image
                                                src={category.icon}
                                                alt={category.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <Link href={`/listings/${category._id}`}>
                                            {category.name}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default NavSidebar;
