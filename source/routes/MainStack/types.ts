import {ITransactionList} from '~screens/TransactionHistory/types';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  TransactionHistory: undefined;
  TransactionDetails: ITransactionList;
};
