import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { IJwtPayload } from '../auth/auth.interface';

const myProfile = catchAsync(async (req, res) => {
//   console.log('req.user', req.user);

  const isUser = req.user as IJwtPayload;

  const result = await UserServices.myProfile(isUser);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  });
});

export const UserController = {
  myProfile,
};
