"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const PBCarosole = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images?.map((img, idx: number) => (
            <SwiperSlide
              key={idx}
              className="relative w-full h-56 mx-auto flex items-center justify-center"
            >
              <Image
                src={img}
                alt={`Product Image ${idx + 1}`}
                height={500}
                width={500}
                className=" object-contain h-[20rem] object-center rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-5"
        >
          {images?.map((img, idx: number) => (
            <SwiperSlide key={idx} className="">
              <Image
                src={img}
                alt={`Product Image ${idx + 1}`}
                height={100}
                width={100}
                className="object-contain h-20 rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PBCarosole;
