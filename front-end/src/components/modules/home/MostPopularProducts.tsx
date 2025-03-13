import PBContainer from "@/components/ui/PBContainer";
import { TLIsting } from "@/types/listings";
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

const MostPopularProducts = ({ data }: { data: TLIsting[] }) => {
  // console.log('object', data);

  return (
    <>
      <PBContainer maxWidth="7xl">
        <div className="mt-5">
          <h2 className=" text-lg font-semibold">Most Popular Products</h2>
          <div className="mt-4">
            <Carousel className="w-full max-w-7xl mx-auto">
              <CarouselContent>
                {data
                  ?.slice()
                  ?.reverse()
                  ?.map((product) => (
                    <CarouselItem
                      key={product._id}
                      className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
                    >
                      <div className="p-2">
                        <Card className="bg-white border-neutral-300 rounded-lg shadow-none">
                          <CardContent className="flex flex-col aspect-square items-center justify-center ">
                            <div className="relative w-full h-[8rem]">
                              <Image
                                src={product.images[0]}
                                alt={product.title}
                                fill
                                className="object-contain rounded-md"
                              />
                            </div>
                            <Link href={`/listings/${product._id}`}>
                              <h2 className="mt-2 text-sm font-medium text-center text-gray-800">
                                {product.title.length > 30
                                  ? product.title.slice(0, 30) + "..."
                                  : product.title}
                              </h2>
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </PBContainer>
    </>
  );
};

export default MostPopularProducts;
