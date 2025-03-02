import { ITransaction } from './transactions.interface';
import Transaction from './transactions.model';

const createTransaction = async (payload: ITransaction) => {
  const result = await Transaction.create(payload);

  return result;
};

export const TransactionServices = {
  createTransaction,
};
