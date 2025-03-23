import PBButton from "@/components/ui/PBButton";
import PBContainer from "@/components/ui/PBContainer";
import { TLIsting } from "@/types/listings";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { currencyFormatter } from "@/utils/currencyFormatter";

const SportsCategoryProducts = ({ sports }: { sports: TLIsting }) => {
  // @ts-ignore
  const sportId = sports[0]?._id as string;

  return (
    <>
      <PBContainer maxWidth="7xl" className="mt-4 lg:mt-10">
        <div className=" flex items-center justify-between">
          <h2 className=" text-lg font-semibold">
            Best Selling in Sports & Fitness
          </h2>
          <Link href={`/ads/${sportId}`}>
            <PBButton>
              View All <ArrowRight />
            </PBButton>
          </Link>
        </div>
        <div className="mt-5">
          <Carousel className="relative w-full max-w-7xl mx-auto">
            <CarouselContent>
              {sports?.map((product: TLIsting) => (
                <CarouselItem
                  key={product._id}
                  className="pl-1 basis-1/1 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-2">
                    <Link href={`/listings/${product._id}`}>
                      <Card className="bg-white group border-neutral-200 rounded-2xl shadow-none">
                        <CardContent className="flex flex-col aspect-square items-center justify-evenly ">
                          <div className="relative w-full h-[8rem]">
                            <Image
                              src={product.images[0]}
                              alt={product.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                          </div>

                          <h2 className="mt-2 text-md font-medium text-center text-gray-800">
                            {product.title.length > 30
                              ? product.title.slice(0, 30) + "..."
                              : product.title}
                          </h2>
                          <p className=" group-hover:text-[#1575B9] group-hover:font-bold">
                            {currencyFormatter(product.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-4 right-12 -translate-x-1/2 flex gap-1">
              <CarouselPrevious className="border-neutral-400" />
              <CarouselNext className="border-neutral-400" />
            </div>
          </Carousel>
        </div>
      </PBContainer>
    </>
  );
};

export default SportsCategoryProducts;
