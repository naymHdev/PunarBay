import { Router } from 'express';
import { ListingValidations } from './listing.validation';
import { ListingControllers } from './listing.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';

const router = Router();

router.get('/', ListingControllers.getAllListings);
router.get('/:id', ListingControllers.getSingleListing);

router.post(
  '/',
  auth('USER'),
  multerUpload.fields([{ name: 'images' }]),
  parseBody,
  validateRequest(ListingValidations.listingValidationSchema),
  ListingControllers.createListing,
);

router.delete('/:id', ListingControllers.deleteListingProduct);

export const ListingRoutes = router;
