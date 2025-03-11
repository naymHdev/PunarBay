import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WishlistServices } from './wishlist.service';
import { IJwtPayload } from '../auth/auth.interface';

const addToWishlist = catchAsync(async (req, res) => {
  const wishlist = await WishlistServices.addToWishlist(
    req.body,
    req.user as IJwtPayload,
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Wishlist added successfully',
    data: wishlist,
  });
});

const getMyWishlist = catchAsync(async (req, res) => {
  const result = await WishlistServices.getWishlist(req.user as IJwtPayload);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Wishlist retrived successfully',
    data: result,
  });
});

export const WishlistControllers = {
  addToWishlist,
  getMyWishlist,
};
