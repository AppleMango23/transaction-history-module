import React, {useEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {MockTransactionDataList} from '~MockData/MockTransactionDataList';

import {ITransactionList, TransactionHistoryProps} from './types';
import {styles} from './styles';

export default function TransactionHistory({
  navigation,
  route,
}: TransactionHistoryProps) {
  // MARK: Events
  function onTransactionButtonPress(item: ITransactionList) {
    navigation.navigate('TransactionDetails', item);
  }

  // MARK: Render Methods
  function renderItemTransaction({item}: {item: ITransactionList}) {
    const {description, amount, date, type} = item || {};

    return (
      <TouchableOpacity
        onPress={() => onTransactionButtonPress(item)}
        style={styles.transactionItemWrapper}>
        <View style={styles.transactionItemRow}>
          <Text style={styles.transactionText} numberOfLines={1}>
            {description}
          </Text>
          <Text style={styles.transactionTextDeduct}>{`-RM ${amount}`}</Text>
        </View>
        <View style={styles.transactionItemRow}>
          <Text style={styles.transactionDate}>{date}</Text>
          <Text style={styles.transactionType}>{type}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={MockTransactionDataList}
        renderItem={renderItemTransaction}
      />
    </SafeAreaView>
  );
}
