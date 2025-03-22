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
import { currencyFormatter } from "@/utils/currencyFormatter";

const MostPopularProducts = ({ data }: { data: TLIsting[] }) => {
  // console.log('object', data);

  return (
    <>
      <div className="mt-4 md:mt-10">
        <PBContainer maxWidth="7xl">
          <div>
            <div className=" flex items-center justify-between">
              <h2 className=" text-lg font-semibold">Most Popular Ads</h2>
              <div></div>
            </div>
            <div className="mt-5">
              <Carousel className="relative w-full max-w-7xl mx-auto">
                <div className="absolute -top-7 right-12 -translate-x-1/2 flex gap-1">
                  <CarouselPrevious className="border-neutral-400" />
                  <CarouselNext className="border-neutral-400" />
                </div>
                <CarouselContent>
                  {data
                    ?.slice()
                    ?.reverse()
                    ?.map((product) => (
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
                                <p className=" group-hover:text-[#1575B9] group-hover:font-bold">{currencyFormatter(product.price)}</p>
                              </CardContent>
                            </Card>
                          </Link>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default MostPopularProducts;
