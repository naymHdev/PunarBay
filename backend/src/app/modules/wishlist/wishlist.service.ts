import { Wishlist } from './wishlist.model';

const getWishlist = async (userId: string) => {
  return await Wishlist.findOne({ userId }).populate('items.productId');
};

const addToWishlist = async (userId: string, productId: string) => {
  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    wishlist = new Wishlist({ userId, items: [{ productId }] });
  } else {
    if (!wishlist.items.some((item) => item.productId.equals(productId))) {
      wishlist.items.push({ productId });
    }
  }
  await wishlist.save();
  return wishlist;
};

const removeFromWishlist = async (userId: string, productId: string) => {
  const wishlist = await Wishlist.findOneAndUpdate(
    { userId },
    { $pull: { items: { productId } } },
    { new: true },
  );
  return wishlist;
};

export const WishlistServices = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
