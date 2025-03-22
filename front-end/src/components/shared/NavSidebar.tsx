import { AlignJustify, CircleUserRound, FolderKanban, UserRound, X, Heart } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const NavSidebar = () => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        if (sidebarRef.current) {
            sidebarRef.current.classList.toggle("-translate-x-full");
        }
    };

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
                className="bg-[#F3F3F3] fixed top-0 left-0 h-full w-64 transform -translate-x-full transition-transform duration-300 z-50 shadow text-gray-700"
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
                        <Link href="/user/dashboard">
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
                <section className=" p-4">
                    <h3 className=" font-semibold text-lg uppercase">Categories</h3>
                </section>
            </div>
        </>
    );
};

export default NavSidebar;
