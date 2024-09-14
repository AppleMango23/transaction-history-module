import React from 'react';

import {Text, View} from 'react-native';

import {styles} from './styles';
import {TransactionDetailsProps} from './types';

export default function TransactionDetails({route}: TransactionDetailsProps) {
  const {id, amount, date, description, type, cardInfo} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cardDetails}>
        <Text style={styles.paymentIdText}>{`Payment Id: ${id}`}</Text>
        <Text style={styles.textStandard}>{`Date: ${date}`}</Text>
        <Text style={styles.textStandard}>{`Description: ${description}`}</Text>
        <View style={styles.rowWrapper}>
          <Text style={styles.textStandard}>{`Type: ${type}`}</Text>
          <Text style={styles.textStandard}>{`Amount: ${amount}`}</Text>
        </View>
        <Text style={styles.textStandard}>{`Card: ${cardInfo}`}</Text>
      </View>
    </View>
  );
}
