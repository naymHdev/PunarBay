import WishlistProducts from "@/components/modules/wishlist";
import { getAllWishlists } from "@/services/wishlist";
import { TWishlistProduct } from "@/types/wishlist";

const WishlistProductPage = async () => {
  const wishlists = await getAllWishlists();
  const wishlistsArray =
    wishlists?.data?.flatMap((wishlist: any) => wishlist.products) || [];

  // console.log("datas", wishlistsArray);

  return (
    <>
      <div className=" border-b pb-3 border-neutral-400">
        <h2 className=" text-2xl font-bold">My Wishlist Products</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistsArray?.map((product: TWishlistProduct) => (
          <WishlistProducts wishlistItem={product} />
        ))}
      </div>
    </>
  );
};

export default WishlistProductPage;
