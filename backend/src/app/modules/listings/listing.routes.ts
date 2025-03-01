import { Router } from 'express';
import { ListingValidations } from './listing.validation';
import { ListingControllers } from './listing.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { UserRole } from '../auth/auth.interface';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';

const router = Router();

router.get('/', ListingControllers.getAllListings);
router.get('/:id', ListingControllers.getSingleListing);

router.post(
  '/',
  auth(UserRole.USER),
  multerUpload.fields([{ name: 'images' }]),
  parseBody,
  validateRequest(ListingValidations.listingValidationSchema),
  ListingControllers.createListing,
);

router.delete(
  '/:id',
  auth(UserRole.USER),
  ListingControllers.deleteListingProduct,
);

export const ListingRoutes = router;
