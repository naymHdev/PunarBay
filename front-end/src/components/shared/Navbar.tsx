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
      <div className="shadow ">
        <PBContainer maxWidth="7xl">
          <div className="py-5 grid lg:grid-cols-3 items-center justify-center">
            <div>
              <div className="flex items-center text-4xl">
                <h2 className=" font-bold text-blue-600">Punar</h2>
                Bay
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" flex items-center">
                    BD
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" border-none shadow-md">
                    <DropdownMenuLabel>Type Your City Name</DropdownMenuLabel>
                    <DropdownMenuSeparator className=" border border-neutral-300" />
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
                  className=" bg-blue-600 border-none rounded-none hover:bg-blue-700 text-white"
                  type="submit"
                >
                  <Search />
                </Button>
              </div>
            </div>
            <div className=" flex items-center justify-end gap-5">
              <div className=" flex items-center gap-2">
                <CircleUserRound />
                <Link href="/login">Login/Register</Link>
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
