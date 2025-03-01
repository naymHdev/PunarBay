import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ListingServices } from './listing.service';
import { IImageFiles } from '../../interface/IImageFile';

const createListing = catchAsync(async (req, res) => {
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

export const ListingControllers = {
  createListing,
};
