import { getAllWishlists } from "@/services/wishlist";

const WishlistProductPage = async () => {
  const wishlists = await getAllWishlists();

  console.log("datas", wishlists);

  return <>WishlistProductPage</>;
};

export default WishlistProductPage;
