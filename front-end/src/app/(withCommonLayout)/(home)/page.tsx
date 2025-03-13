import FeaturedCategories from "@/components/modules/home";
import MostPopularProducts from "@/components/modules/home/MostPopularProducts";
import { getAllListings } from "@/services/listings";

const HomePage = async () => {
  const { data } = await getAllListings();

  return (
    <>
      <div className=" space-y-6">
        <MostPopularProducts data={data} />
        <FeaturedCategories />
      </div>
    </>
  );
};

export default HomePage;
