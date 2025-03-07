import { Router } from 'express';
import { TransactionController } from './transactions.controller';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { TransactionValidations } from './transactions.validation';

const router = Router();

router.get('/', auth('USER'));

router.post(
  '/',
  auth('USER'),
  validateRequest(TransactionValidations.TransactionValidationSchema),
  TransactionController.createTransaction,
);

router.put('/:id', auth('USER'));

export const TransactionRoutes = router;
