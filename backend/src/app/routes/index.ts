import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ListingRoutes } from '../modules/listings/listing.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { TransactionRoutes } from '../modules/transactions/transactions.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { WishlistRouters } from '../modules/wishlist/wishlist.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/listings',
    route: ListingRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/transactions',
    route: TransactionRoutes,
  },
  {
    path: '/wishlists',
    route: WishlistRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
