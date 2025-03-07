import { StatusCodes } from 'http-status-codes';
import { IJwtPayload, IUser } from '../auth/auth.interface';
import User from '../auth/auth.model';
import AppError from '../../errors/appError';
import { IImageFile } from '../../interface/IImageFile';

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

const updateProfile = async (
  payload: IUser,
  file: IImageFile,
  authUser: IJwtPayload,
) => {
  const isUserExists = await User.findById(authUser._id);

  if (!isUserExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }
  if (!isUserExists.isActive) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is not active!');
  }

  if (file && file.path) {
    payload.profileImage = file.path;
  }

  const result = await User.findOneAndUpdate({ user: authUser._id }, payload, {
    new: true,
  });

  return result;
};

export const UserServices = {
  myProfile,
  updateProfile,
};
