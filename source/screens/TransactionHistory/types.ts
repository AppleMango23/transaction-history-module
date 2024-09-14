import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '~routes/MainStack/types';

export type TransactionHistoryProps = StackScreenProps<
  RootStackParamList,
  'TransactionHistory'
>;

// MARK: Interface
export type ITransactionList = {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: string;
};
