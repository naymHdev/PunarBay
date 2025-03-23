import FeaturedCategories from "@/components/modules/home";
import BannerSection from "@/components/modules/home/Banner";
import HighlightCategory from "@/components/modules/home/HighlightCategory";
import HowItWorksSection from "@/components/modules/home/HowItWorks";
import MostPopularProducts from "@/components/modules/home/MostPopularProducts";
import ShopSellWithConfidence from "@/components/modules/home/ShopSellWithConfidence";
import SportsCategoryProducts from "@/components/modules/home/Sports";
import TestimonialSection from "@/components/modules/home/Testimonial";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";

const HomePage = async () => {
  const { data: allListings } = await getAllListings();

  const availableProduct = allListings.filter(
    (itm: TLIsting) => itm.status === "available" && itm.userID !== null
  );

  const allSportsProducts = availableProduct.filter(
    (itm: TLIsting) => itm.categories.name === "Sports & Fitness"
  );
  // console.log("allSportsProducts", allSportsProducts);

  return (
    <>
      <div className="">
        <BannerSection />
        <FeaturedCategories />
        <HighlightCategory />
        <MostPopularProducts data={availableProduct} />
        <HowItWorksSection />
        <TestimonialSection />
        <SportsCategoryProducts sports={allSportsProducts} />
        <ShopSellWithConfidence />
      </div>
    </>
  );
};

export default HomePage;
