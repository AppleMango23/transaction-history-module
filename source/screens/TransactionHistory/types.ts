import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '~routes/MainStack/types';

export type TransactionHistoryProps = StackScreenProps<
  RootStackParamList,
  'TransactionHistory'
>;
