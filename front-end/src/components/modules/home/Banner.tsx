"use client";

import PBContainer from "@/components/ui/PBContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import slide1 from "../../../assets/images/b1.png";
import slide2 from "../../../assets/images/b2.png";
import slide3 from "../../../assets/images/b3.png";
import slide4 from "../../../assets/images/b4.png";
import slide5 from "../../../assets/images/b5.jpeg";
import Image from "next/image";

const slides = [slide1, slide2, slide3, slide4, slide5];

const BannerSection = () => {
  return (
    <PBContainer>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[25vh] md:h-[40vh] lg:h-[65vh]">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="w-full object-contain"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PBContainer>
  );
};

export default BannerSection;
