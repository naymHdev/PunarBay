import { Router } from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../auth/auth.interface';
import { AuthValidation } from '../auth/auth.validation';
import validateRequest from '../../middleware/validateRequest';

const router = Router();

router.get('/:id', auth(UserRole.USER), UserController.myProfile);
router.put(
  '/:id',
  auth(UserRole.USER),
  validateRequest(AuthValidation.userUpdateValidationSchema),
  UserController.updateProfile,
);

export const UserRoutes = router;
