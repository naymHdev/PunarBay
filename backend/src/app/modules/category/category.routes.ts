import { Router } from 'express';
import { CategoryController } from './category.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middleware/bodyParser';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { categoryValidation } from './category.validation';

const router = Router();

router.get('/', CategoryController.getAllCategory);

router.post(
  '/',
  auth('ADMIN', 'USER'),
  multerUpload.single('icon'),
  parseBody,
  validateRequest(categoryValidation.createCategoryValidationSchema),
  CategoryController.createCategory,
);

router.delete('/:id', auth('ADMIN', 'USER'), CategoryController.deleteCategory);

export const CategoryRoutes = router;
