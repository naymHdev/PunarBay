"use client";

import { Button } from "@/components/ui/button";
import { TLIsting } from "@/types/listings";
import { currencyFormatter } from "@/utils/currencyFormatter";
import clsx from "clsx";
import { Plus } from "lucide-react";
import Image from "next/image";

type TListingsProps = {
  allListings: TLIsting[];
};

const ManageListings = ({ allListings }: TListingsProps) => {
  //   console.log("allListings", allListings);

  return (
    <>
      <div className=" mb-6 border-neutral-400">
        <div className="flex items-center justify-between">
          <h2 className=" text-2xl font-bold">My Products</h2>
          <Button
            className={clsx(
              "bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg"
            )}
          >
            Cretae Post <Plus />
          </Button>
        </div>
      </div>
      <div className=" space-y-8 h-screen overflow-auto no-scrollbar">
        {allListings &&
          allListings.map(
            ({
              title,
              images,
              description,
              _id,
              price,
              condition,
              categories,
              status,
            }) => (
              <div
                key={_id}
                className="border border-neutral-300 p-4 rounded-2xl flex gap-8 justify-between"
              >
                <div>
                  <div className=" space-y-2">
                    <h2 className=" text-2xl font-medium">{title}</h2>
                    <p className=" text-sm font-2nd">{description}</p>
                    <p className="">{currencyFormatter(price)}</p>
                  </div>
                  <div className=" mt-8 flex items-center">
                    {categories?.name && (
                      <div className="font-medium border-r px-4">
                        Categorie: {categories?.name}
                      </div>
                    )}

                    {condition && (
                      <div className="font-medium border-r px-4">
                        Condition:
                        <span
                          className={clsx("px-1", {
                            "text-green-500": condition === "new",
                            "text-yellow-500": condition === "used",
                            "text-blue-500": condition === "refurbished",
                          })}
                        >
                          {condition.charAt(0).toUpperCase() +
                            condition.slice(1)}
                        </span>
                      </div>
                    )}

                    {status && (
                      <div className={clsx("font-medium px-4")}>
                        Status:
                        <span
                          className={clsx("px-1", {
                            "text-green-500": status === "available",
                            "text-yellow-500": status === "sold",
                          })}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button
                      className={clsx(
                        "bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg"
                      )}
                    >
                      Remove
                    </Button>

                    <Button
                      className={clsx(
                        "bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg"
                      )}
                    >
                      Update
                    </Button>
                  </div>
                </div>
                <div>
                  <Image
                    src={images[0]}
                    width={200}
                    height={200}
                    alt="product image"
                    className="w-full h-auto max-w-[200px] rounded-sm object-cover"
                  />
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default ManageListings;
