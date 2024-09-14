import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '~routes/MainStack/types';

export type TransactionDetailsProps = StackScreenProps<
  RootStackParamList,
  'TransactionDetails'
>;
