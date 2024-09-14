import React, {useEffect} from 'react';

import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {MockTransactionDataList} from '~MockData/MockTransactionDataList';

import {ITransactionList, TransactionHistoryProps} from './types';
import {styles} from './styles';

export default function TransactionHistory({
  navigation,
  route,
}: TransactionHistoryProps) {
  useEffect(() => {}, []);

  // MARK: Render Methods
  function renderItemTransaction({item}: {item: ITransactionList}) {
    const {description, amount, date, type} = item || {};

    return (
      <TouchableOpacity style={styles.transactionItemWrapper}>
        <Text style={styles.transactionDescription}>{description}</Text>
        <Text style={styles.transactionText}>{amount}</Text>
        <Text style={styles.transactionText}>{date}</Text>
        <Text style={styles.transactionText}>{type}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <Text>Transaction Screen</Text>
      <FlatList
        data={MockTransactionDataList}
        renderItem={renderItemTransaction}
      />
    </SafeAreaView>
  );
}
