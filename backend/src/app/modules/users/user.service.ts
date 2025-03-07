import { StatusCodes } from 'http-status-codes';
import { IJwtPayload } from '../auth/auth.interface';
import User from '../auth/auth.model';
import AppError from '../../errors/appError';

const myProfile = async (authUser: IJwtPayload) => {
//   console.log('authUser', authUser);

  const isUserExists = await User.findById(authUser._id);
  if (!isUserExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }
  if (!isUserExists.isActive) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is not active!');
  }

  return {
    ...isUserExists.toObject(),
  };
};

export const UserServices = {
  myProfile,
};
