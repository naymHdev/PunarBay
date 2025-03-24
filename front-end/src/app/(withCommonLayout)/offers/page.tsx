import PBContainer from "@/components/ui/PBContainer";
import Image from "next/image";
import OfferCards from "@/components/modules/offers";

const OffersPage = () => {
  return (
    <>
      <div className="relative w-full h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <Image
          src="https://res.cloudinary.com/dgrg4lmww/image/upload/v1742730777/11_xcwqkk.png"
          alt="Offer Banner Image by PunarBay"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </div>

      <PBContainer maxWidth="7xl">
        <div className="mt-6 lg:mt-10">
          <OfferCards />
        </div>
      </PBContainer>
    </>
  );
};

export default OffersPage;
