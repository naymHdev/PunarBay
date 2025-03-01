import { Router } from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import userInfoInfoParser from '../../middleware/userInfoParser';

const router = Router();

router.post(
  '/register',
  userInfoInfoParser,
  validateRequest(AuthValidation.userValidationSchema),
  AuthController.registerUser,
);

router.post('/login', AuthController.loginUser);

router.post('/logout');

router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoutes = router;
