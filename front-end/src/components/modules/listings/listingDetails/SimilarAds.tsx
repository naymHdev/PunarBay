import ProductCard from "@/components/ui/ProductCard";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";
import { useEffect, useState } from "react";

const SimilarAds = ({ category }: { category: string }) => {
  const [similarData, setSimilarData] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const [similarArray] = await Promise.all([getAllListings()]);
      setSimilarData(similarArray?.data);
    };
    fatchData();
  }, []);

  const categoryBaseArray = similarData?.filter(
    (itm: TLIsting) => itm?.categories?.name === category
  );
  console.log("categoryBaseArray__", categoryBaseArray);

  return (
    <>
      <div className="">
        <p className=" text-lg font-semibold">Similar Ads</p>
        <div className=" mt-4">
          {categoryBaseArray?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SimilarAds;
