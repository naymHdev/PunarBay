import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ListingServices } from './listing.service';
import { IImageFiles } from '../../interface/IImageFile';

const createListing = catchAsync(async (req, res) => {
  // console.log("Received Data:", req.body);
  const result = await ListingServices.createListingIntoDB(
    req.body,
    req.files as IImageFiles,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Listing added successfully',
    data: result,
  });
});

const getAllListings = catchAsync(async (req, res) => {
  const result = await ListingServices.getALlListingsFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Listings Products are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleListing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ListingServices.getSingleListingFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Listing Product retrieved successfully',
    data: result,
  });
});

const deleteListingProduct = catchAsync(async (req, res) => {
  const {
    params: { id },
  } = req;

  const result = await ListingServices.deleteListingFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Listing Product deleted successfully',
    data: result,
  });
});

export const ListingControllers = {
  createListing,
  getAllListings,
  getSingleListing,
  deleteListingProduct,
};
