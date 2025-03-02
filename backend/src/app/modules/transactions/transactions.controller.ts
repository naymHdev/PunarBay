import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TransactionServices } from './transactions.service';

const createTransaction = catchAsync(async (req, res) => {
  const result = await TransactionServices.createTransaction(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Transaction compleated successfully',
    data: result,
  });
});

export const TransactionController = {
  createTransaction,
};
