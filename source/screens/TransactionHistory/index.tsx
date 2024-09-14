import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';
import {TransactionHistoryProps} from './types';

export default function TransactionHistory({
  navigation,
  route,
}: TransactionHistoryProps) {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
}
