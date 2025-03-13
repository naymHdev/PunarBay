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
    if (!wishlistData.products || wishlistData.products.length === 0) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        'No products provided to add to wishlist.',
      );
    }

    const userWishlist = await Wishlist.findOne({ user: authUser._id });

    for (const productItem of wishlistData.products) {
      const product = await Listing.findById(productItem.product);

      if (!product) {
        throw new AppError(
          StatusCodes.NOT_FOUND,
          `Product not found: ${productItem.product}`,
        );
      }

      if (product.status === 'sold') {
        throw new Error(`Product ${product?.title} is sold out.`);
      }

      // Check if product already exists in wishlist
      const isExists = userWishlist?.products.some(
        (p) => p.product.toString() === productItem.product.toString(),
      );

      if (isExists) {
        throw new AppError(
          StatusCodes.NOT_ACCEPTABLE,
          'You already added this product to your wishlist!',
        );
      }
    }

    if (userWishlist) {
      // Update existing wishlist and push new products
      userWishlist.products.push(...wishlistData.products);
      await userWishlist.save();
      return userWishlist;
    } else {
      // Create a new wishlist if it doesn't exist
      const createWishlist = new Wishlist({
        user: authUser._id,
        products: wishlistData.products,
      });
      const result = await createWishlist.save();
      return result;
    }
  } catch (error: any) {
    throw new AppError(StatusCodes.NOT_FOUND, error.message);
  }
};

const getWishlist = async (authUser: IJwtPayload) => {
  const result = await Wishlist.find({ user: authUser._id }).populate({
    path: 'products.product',
    model: 'Listing',
  });

  return result;
};

const deleteWishlist = async (id: string, authUser: IJwtPayload) => {
  try {
    const wishlist = await Wishlist.findOne({ user: authUser._id });

    if (!wishlist) {
      throw new Error('Wishlist not found.');
    }
    // Find the index of the product in the products array
    const productIndex = wishlist.products.findIndex(
      (item) => item.product.toString() === id.toString(),
    );

    if (productIndex === -1) {
      throw new Error('Product not found in your wishlist.');
    }

    // Remove the product from the wishlist
    wishlist.products.splice(productIndex, 1);

    // Save the updated wishlist
    const updatedWishlist = await wishlist.save();

    return updatedWishlist;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete wishlist');
  }
};

export const WishlistServices = {
  getWishlist,
  addToWishlist,
  deleteWishlist,
};
