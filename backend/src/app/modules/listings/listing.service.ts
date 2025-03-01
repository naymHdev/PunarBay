import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/appError';
import { IImageFiles } from '../../interface/IImageFile';
import { IListing } from './listing.interface';
import { Listing } from './listing.model';

const createListingIntoDB = async (
  productData: Partial<IListing>,
  productImages: IImageFiles,
) => {
  const { images } = productImages;
  if (!images || images.length === 0) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Product images are required.');
  }

  productData.images = images.map((image) => image.path);

  // Create a new Listing document using the model, not just a plain object
  const newProduct = new Listing(productData); // Create a Listing instance

  const result = await newProduct.save();
  return result;
};

export const ListingServices = {
  createListingIntoDB,
};
