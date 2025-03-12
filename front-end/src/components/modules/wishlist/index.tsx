"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Tag, Clock, Trash2 } from "lucide-react";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { formatDistanceToNow } from "date-fns";
import { TWishlistProduct } from "@/types/wishlist";
import { Button } from "@/components/ui/button";

const WishlistProducts = ({
  wishlistItem,
}: {
  wishlistItem: TWishlistProduct;
}) => {
  const { product } = wishlistItem;

  const timeAgo = formatDistanceToNow(new Date(product.createdAt), {
    addSuffix: true,
  });

  //   console.log("product", product);

  return (
    <>
      <Card className="w-full max-w-sm bg-white border-neutral-300 rounded-lg overflow-hidden">
        <CardHeader className="p-4">
          <div className="relative w-full h-40">
            <Image
              src={product.images[0]}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {product.title}
          </CardTitle>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-primary" />
              <span>{product.condition}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-500" />
              <span>{timeAgo}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-primary">
              {currencyFormatter(product.price)}
            </span>
            <Button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white border-none">
              <Trash2 /> Remove
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WishlistProducts;
