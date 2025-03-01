import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/appError';
import { IImageFiles } from '../../interface/IImageFile';
import { ConditionType, IListing } from './listing.interface';
import { Listing } from './listing.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { IJwtPayload } from '../auth/auth.interface';
import User from '../auth/auth.model';

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

const getALlListingsFromDB = async (query: Record<string, unknown>) => {
  const { minPrice, maxPrice, categories, brands, condition, ...pQuery } =
    query;

  // Build the filter object
  const filter: Record<string, any> = {};

  // Filters functionals
  if (categories) {
    const categoryArray =
      typeof categories === 'string'
        ? categories.split(',')
        : Array.isArray(categories)
          ? categories
          : [categories];

    filter.categories = { $in: categoryArray };
  }

  if (brands) {
    const brandsArray =
      typeof brands === 'string'
        ? brands.split(',')
        : Array.isArray(brands)
          ? brands
          : [brands];

    filter.brands = { $in: brandsArray };
  }

  if (condition) {
    const validConditions: ConditionType[] = ['new', 'used', 'refurbished'];

    const conditionArray = Array.isArray(condition)
      ? condition.filter((c) => validConditions.includes(c as ConditionType))
      : validConditions.includes(condition as ConditionType)
        ? [condition]
        : [];

    if (conditionArray.length > 0) {
      filter.condition = { $in: conditionArray };
    }
  }

  const listingsQuery = new QueryBuilder(Listing.find(filter), pQuery)
    .search(['title', 'description'])
    .filter()
    .fields()
    .priceRange(Number(minPrice) || 0, Number(maxPrice) || Infinity);

  const proucts = await listingsQuery.modelQuery.lean();
  const meta = await listingsQuery.countTotal();

  return {
    result: proucts,
    meta,
  };
};

const getSingleListingFromDB = async (id: string) => {
  const product = await Listing.findById(id);

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Listing Product not found');
  }

  const productObj = product.toObject();

  return productObj;
};

const deleteListingFromDB = async (authUser: IJwtPayload, id: string) => {
  const user = await User.findById(authUser.userId);

  // Find the product with matching user
  const product = await Listing.findOne({
    _id: id,
  });

  if (!user?.isActive) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is not active');
  }

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Product Not Found');
  }

  const result = await Listing.findByIdAndDelete(id);
  return result;
};

export const ListingServices = {
  createListingIntoDB,
  getALlListingsFromDB,
  getSingleListingFromDB,
  deleteListingFromDB,
};
