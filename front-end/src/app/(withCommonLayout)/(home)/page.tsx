import FeaturedCategories from "@/components/modules/home";
import HowItWorksSection from "@/components/modules/home/HowItWorks";
import MostPopularProducts from "@/components/modules/home/MostPopularProducts";
import ShopSellWithConfidence from "@/components/modules/home/ShopSellWithConfidence";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";

const HomePage = async () => {
  const { data: allListings } = await getAllListings();

  const availableProduct = allListings.filter(
    (itm: TLIsting) => itm.status === "available" && itm.userID !== null
  );

  return (
    <>
      <div className="">
        <MostPopularProducts data={allListings} />
        <FeaturedCategories />
        <HowItWorksSection />
        <ShopSellWithConfidence />
      </div>
    </>
  );
};

export default HomePage;
