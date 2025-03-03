import { CircleUserRound, Search } from "lucide-react";
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

const Navbar = () => {
  return (
    <>
      <div className="shadow">
        <PBContainer maxWidth="7xl">
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start">
              <div className="flex items-center text-4xl">
                <h2 className="font-bold text-blue-600">Punar</h2>Bay
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

              <div className="flex w-full items-center border border-blue-600 rounded">
                <Input
                  className="px-3 border-none"
                  type="search"
                  placeholder="Search in All Bangladesh"
                />
                <Button
                  className="bg-blue-600 border-none rounded-none hover:bg-blue-700 text-white"
                  type="submit"
                >
                  <Search />
                </Button>
              </div>
            </div>

            {/* User and Post Ad Buttons */}
            <div className="flex justify-center sm:justify-end gap-5">
              <div className="flex items-center gap-2">
                <CircleUserRound />
                <Link href="/register" className="text-sm">
                  Login/Register
                </Link>
              </div>
              <PBButton>Post Free Ad</PBButton>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default Navbar;
