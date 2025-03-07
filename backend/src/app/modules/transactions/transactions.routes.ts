import { Router } from 'express';
import { TransactionController } from './transactions.controller';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { TransactionValidations } from './transactions.validation';
import { UserRole } from '../auth/auth.interface';

const router = Router();

router.get('/', auth(UserRole.USER));

router.post(
  '/',
  auth(UserRole.USER),
  validateRequest(TransactionValidations.TransactionValidationSchema),
  TransactionController.createTransaction,
);

router.put('/:id', auth(UserRole.USER));

export const TransactionRoutes = router;
