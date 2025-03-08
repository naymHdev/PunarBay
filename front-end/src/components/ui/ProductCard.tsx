import { TLIsting } from "@/types/listings";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { formatDistanceToNow } from "date-fns";
import { Clock4 } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }: { product: TLIsting }) => {
  const timeAgo = formatDistanceToNow(new Date(product.createdAt), {
    addSuffix: true,
  });

  return (
    <>
      <Link href={`/listings/${product._id}`}>
        <Card className="relative max-w-3xl mb-6 bg-white border-none mx-auto shadow-md rounded-lg overflow-hidden">
          <CardContent className="flex flex-col md:flex-row gap-5">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex items-center justify-center">
              <Image
                src={product.images[0]}
                alt="Product Image"
                width={250}
                height={250}
                className="w-full h-auto max-w-[250px] object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#1575B9]">
                  {product.title}
                </h2>
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
      </Link>
    </>
  );
};

export default ProductCard;
