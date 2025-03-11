import { Router } from 'express';
import { WishlistControllers } from './wishlist.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../auth/auth.interface';

const router = Router();

router.post('/', auth(UserRole.USER), WishlistControllers.addToWishlist);

router.get('/', auth(UserRole.USER), WishlistControllers.getMyWishlist);

export const WishlistRouters = router;
