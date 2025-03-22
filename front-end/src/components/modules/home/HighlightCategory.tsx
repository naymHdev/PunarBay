import PBContainer from "@/components/ui/PBContainer";
import slide1 from "../../../assets/images/sl1.jpeg";
import slide2 from "../../../assets/images/sl2.jpeg";
import slide3 from "../../../assets/images/sl3.jpeg";
import slide4 from "../../../assets/images/slide4.jpeg";
import Image from "next/image";

const slides = [slide1, slide2, slide3, slide4];

const HighlightCategory = () => {
  return (
    <div className="mt-4 md:mt-10">
      <PBContainer maxWidth="7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
          {slides.map((slide, index: number) => (
            <div
              key={index}
              className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl"
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className=" object-contain rounded-2xl"
                priority
              />
            </div>
          ))}
        </div>
      </PBContainer>
    </div>
  );
};

export default HighlightCategory;
