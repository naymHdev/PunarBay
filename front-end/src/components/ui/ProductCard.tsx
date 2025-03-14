"use client";

import { TLIsting } from "@/types/listings";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { formatDistanceToNow } from "date-fns";
import { Clock4, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { addWishlist } from "@/services/wishlist";
import { TWishlist } from "@/types/wishlist";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: TLIsting }) => {
  const timeAgo = formatDistanceToNow(new Date(product.createdAt), {
    addSuffix: true,
  });

  // console.log("product", product?.userID);

  const handleWishlist = async (product: TLIsting) => {
    const wishlistProduct: TWishlist = {
      products: [{ product: product._id }],
    };

    try {
      const res = await addWishlist(wishlistProduct);
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <>
      <Card className="relative max-w-3xl mb-6 bg-white border-none mx-auto shadow-md rounded-lg overflow-hidden">
        <CardContent className="flex gap-5">
          {/* Image Section */}
          <div className="w-full h-52 md:w-1/3 flex items-center justify-center">
            <Link href={`/listings/${product._id}`}>
              <Image
                src={product.images[0]}
                alt="Product Image"
                width={250}
                height={250}
                className="w-full h-52 max-w-[250px] object-contain rounded-lg"
              />
            </Link>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className=" flex items-center justify-between">
                <Link href={`/listings/${product._id}`}>
                  <h2 className="text-xl font-semibold text-[#1575B9]">
                    {product.title.length > 30
                      ? product.title.slice(0, 30) + "..."
                      : product.title}
                  </h2>
                </Link>
                <Button
                  onClick={() => handleWishlist(product)}
                  className=" hover:cursor-pointer bg-none shadow-none text-[#1575B9] text-lg"
                >
                  <Heart />
                </Button>
              </div>

              <p className="text-gray-600 line-clamp-3">
                {product.description}
              </p>
              <p className="text-lg font-bold text-primary">
                {currencyFormatter(product.price)}
              </p>
            </div>

            {/* Status and Time Section */}
            <div className="mt-4 md:mt-0 flex justify-end items-center text-center text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock4 size={20} />
                {timeAgo}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
