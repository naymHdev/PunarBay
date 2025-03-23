"use client";

import PBContainer from "@/components/ui/PBContainer";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import PBButton from "@/components/ui/PBButton";

const TestimonialSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <PBContainer className="mt-8 md:mt-14" maxWidth="7xl">
        <div className=" grid grid-cols-6 items-center gap-6">
          <div className=" col-span-full md:col-span-2">
            <div className=" space-y-5">
              <PBButton>What our users say</PBButton>
              <h2 className=" text-4xl lg:text-6xl font-bold">
                Why they love us
              </h2>
              <p className=" font-medium">
                Helping millions of users to buy and sell easily!
              </p>
            </div>
          </div>
          <div className=" col-span-full md:col-span-4">
            <Carousel
              plugins={[plugin.current]}
              className="w-full mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials?.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/3">
                    <div className="p-1">
                      <Card className="w-full max-w-sm p-4 hover:shadow-sm border-none bg-white">
                        <CardContent className="flex flex-col items-start text-start gap-4 mt-5 mb-3">
                          <span className="text-3xl font-semibold">
                            {testimonial.name}
                          </span>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                          <div className="flex gap-1 text-yellow-500">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, index) => (
                                <Star
                                  key={index}
                                  size={20}
                                  fill="currentColor"
                                  stroke="none"
                                />
                              )
                            )}
                          </div>
                          <p className="text-gray-700">
                            "{testimonial.comment}"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </PBContainer>
    </>
  );
};

export default TestimonialSection;
