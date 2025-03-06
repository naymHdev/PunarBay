import PBLoading from "@/components/ui/PBLoading";
import ProductCard from "@/components/ui/ProductCard";
import { getAllListings } from "@/services/listings";
import { TLIsting } from "@/types/listings";
import { useEffect, useState } from "react";

const SimilarAds = ({ category }: { category: string }) => {
  const [similarData, setSimilarData] = useState<TLIsting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [similarArray] = await Promise.all([getAllListings()]);
        setSimilarData(similarArray?.data || []);
      } catch (error) {
        console.error("Error fetching similar ads:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categoryBaseArray = similarData?.filter(
    (itm: TLIsting) => itm?.categories?.name === category
  );

  return (
    <>
      {loading ? (
        <PBLoading />
      ) : categoryBaseArray.length > 0 ? (
        <div>
          <p className="text-lg font-semibold">Similar Ads</p>
          <div className="mt-4">
            {categoryBaseArray?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No similar ads found.</p>
      )}
    </>
  );
};

export default SimilarAds;
