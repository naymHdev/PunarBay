import { StatusCodes } from 'http-status-codes';
import { IJwtPayload, IUser } from '../auth/auth.interface';
import User from '../auth/auth.model';
import AppError from '../../errors/appError';
import { IImageFile } from '../../interface/IImageFile';

const myProfile = async (authUser: IJwtPayload) => {
  //   console.log('authUser', authUser);

  const isUserExists = await User.findById(authUser._id).populate('_id');
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
  // Fetch the current user
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

  // Merge existing address with new address data
  if (payload.address) {
    payload.address = {
      ...isUserExists.address,
      ...payload.address,
    };
  }

  const result = await User.findOneAndUpdate(
    { _id: authUser._id },
    { $set: payload },
    { new: true },
  );

  return result;
};

const deleteUser = async (authUser: IJwtPayload) => {
  const user = await User.findById(authUser._id);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found!');
  }

  if (!user.isActive) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'Inactive users cannot be deleted!',
    );
  }

  const deletedUser = await User.findByIdAndDelete(authUser._id);

  return deletedUser;
};

export const UserServices = {
  myProfile,
  updateProfile,
  deleteUser,
};
