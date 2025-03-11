import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/appError';
import { IJwtPayload } from '../auth/auth.interface';
import { TWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';
import { Listing } from '../listings/listing.model';

const addToWishlist = async (
  wishlistData: Partial<TWishlist>,
  authUser: IJwtPayload,
) => {
  try {
    if (wishlistData.products) {
      for (const productItem of wishlistData.products) {
        const product = await Listing.findById(productItem.product);

        const isExists = await Wishlist.findOne({
          user: authUser._id,
          'products.product': productItem.product,
        });

        if (isExists) {
          throw new Error('You already added this product to your wishlist!');
        }

        if (product) {
          if (product.status === 'sold') {
            throw new Error(`Product ${product?.title} is soldout.`);
          }
        } else {
          throw new Error(`Product not found: ${productItem.product}`);
        }

        await product.save();
      }
    }

    const createWishlist = new Wishlist({
      ...wishlistData,
      user: authUser._id,
    });

    const result = await createWishlist.save();

    return result;
  } catch (error: any) {
    throw new AppError(StatusCodes.NOT_FOUND, error);
  }
};

const getWishlist = async (authUser: IJwtPayload) => {
  const result = await Wishlist.find({ user: authUser._id }).populate({
    path: 'products.product',
    model: 'Listing',
  });

  return result;
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
