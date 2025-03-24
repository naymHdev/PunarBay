"use client";

import PBCarosole from "@/components/ui/PBCarosole";
import { TLIsting } from "@/types/listings";
import UserBox from "../UserBox";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { formatDistanceToNow } from "date-fns";
import { Clock4, Facebook, Linkedin, Twitter } from "lucide-react";
import SimilarAds from "./SimilarAds";

const ListingDetails = ({ product }: { product: TLIsting }) => {
  const timeAgo = formatDistanceToNow(new Date(product?.createdAt), {
    addSuffix: true,
  });

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-7 gap-7">
        <div className="bg-white col-span-1 md:col-span-4 rounded-lg p-8">
          <PBCarosole images={product?.images} />
          <div className=" mt-10">
            <div className=" flex justify-between">
              <h2 className=" text-2xl font-medium">{product?.title}</h2>
              <p className=" text-lg font-semibold text-[#1575B9]">
                {currencyFormatter(product?.price)}
              </p>
            </div>
            <p className=" mt-5 font-2nd"> {product?.description}</p>

            <div className=" mt-10 border-neutral-300 border-t border-b py-4 flex items-center justify-between">
              <div className=" flex items-center gap-2">
                <p className=" text-lg font-semibold">Posted:</p>
                <div className="flex items-center gap-1">
                  <Clock4 size={20} />
                  {timeAgo}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className=" text-lg font-semibold">Ad ID:</p>
                <p>{product._id?.slice(0, 11)}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <p className=" text-lg font-semibold">Share ad:</p>
              <div className=" flex items-center gap-2">
                <div className=" border border-[#1575B9] rounded-lg p-1">
                  <Facebook />
                </div>
                <div className=" border border-[#1575B9] rounded-lg p-1">
                  <Twitter />
                </div>
                <div className=" border border-[#1575B9] rounded-lg p-1">
                  <Linkedin />
                </div>
              </div>
            </div>
            {/* <SimilarAds category={product.categories.name} /> */}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 rounded-lg">
          <UserBox user={product?.userID} timeAgo={timeAgo} />
        </div>
        <div className=" hidden md:block md:col-span-1 rounded-lg p-8"></div>
      </div>

      {/* Similar Product section */}
      <section className="my-5 grid grid-cols-1 md:grid-cols-7 gap-7">
        <div className="bg-white col-span-1 md:col-span-4 rounded-lg p-8">
          <SimilarAds category={product?.categories.name} />
        </div>
        <div className="col-span-1 md:col-span-2  p-4 rounded-lg"></div>
        <div className=" hidden md:block md:col-span-1 rounded-lg p-8"></div>
      </section>
    </>
  );
};

export default ListingDetails;
