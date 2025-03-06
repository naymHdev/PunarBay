"use client";

import PBCarosole from "@/components/ui/PBCarosole";
import { TLIsting } from "@/types/listings";
import UserBox from "../UserBox";

const ListingDetails = ({ product }: { product: TLIsting }) => {
  const token = product;
  console.log("decoded", token);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-7 gap-7">
        <div className=" hidden md:block md:col-span-1 rounded-lg p-8"></div>
        <div className="bg-white col-span-1 md:col-span-4 rounded-lg p-8">
          <PBCarosole images={product.images} />
        </div>

        <div className="bg-white col-span-1 md:col-span-2  p-4 rounded-lg">
          <UserBox user={product.userID} />
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
