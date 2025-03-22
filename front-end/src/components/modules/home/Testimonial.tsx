"use client";

import PBContainer from "@/components/ui/PBContainer";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

const TestimonialSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <PBContainer maxWidth="7xl">
        <div>TestimonialSection</div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials?.map((itm, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{itm.name}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </PBContainer>
    </>
  );
};

export default TestimonialSection;
