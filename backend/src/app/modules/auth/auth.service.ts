import mongoose from "mongoose";
import { IUser, UserRole } from "./auth.interface";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";
import User from "./auth.model";

// Function to register user
const registerUser = async (userData: IUser) => {
    const session = await mongoose.startSession();
  
    try {
      session.startTransaction();
  
      if ([UserRole.ADMIN].includes(userData.role)) {
        throw new AppError(
          StatusCodes.NOT_ACCEPTABLE,
          'Invalid role. Only User is allowed.',
        );
      }
  
      // Check if the user already exists by email
      const existingUser = await User.findOne({ email: userData.email }).session(
        session,
      );
      if (existingUser) {
        throw new AppError(
          StatusCodes.NOT_ACCEPTABLE,
          'Email is already registered',
        );
      }
  
      // Create the user
      const user = new User(userData);
      const createdUser = await user.save({ session });
  
  
      await profile.save({ session });
  
      await session.commitTransaction();
  
      return await AuthService.loginUser({
        email: createdUser.email,
        password: userData.password,
        clientInfo: userData.clientInfo,
      });
    } catch (error) {
      if (session.inTransaction()) {
        await session.abortTransaction();
      }
      throw error;
    } finally {
      session.endSession();
    }
  };
  
  export const AuthService = { registerUser };
  