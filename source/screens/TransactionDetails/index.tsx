import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';
import {TransactionDetailsProps} from './types';

export default function TransactionDetails({
  navigation,
  route,
}: TransactionDetailsProps) {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
}
