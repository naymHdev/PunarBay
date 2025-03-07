import { Router } from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../auth/auth.interface';

const router = Router();

router.get('/:id', auth(UserRole.USER), UserController.myProfile);

export const UserRoutes = router;
