import React, {useState} from 'react';

import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics';

import {MockTransactionDataList} from '~MockData/MockTransactionDataList';

import {ITransactionList, TransactionHistoryProps} from './types';
import {styles} from './styles';

export default function TransactionHistory({
  navigation,
}: TransactionHistoryProps) {
  const [isMasked, setIsMasked] = useState(true);

  const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

  // MARK: Events
  function onTransactionButtonPress(item: ITransactionList) {
    navigation.navigate('TransactionDetails', item);
  }

  async function onBiometricButtonPress() {
    try {
      // NOTE: If get biometric will not get again
      if (!isMasked) return;

      const {success, error} = await biometrics.simplePrompt({
        promptMessage: 'Confirmation',
      });

      if (!success) {
        throw error;
      }

      setIsMasked(false);
    } catch (error) {
      Alert.alert('Something went wrong', error);
    }
  }

  // MARK: Render Methods
  function renderItemTransaction({item}: {item: ITransactionList}) {
    const {id, description, amount, date, type} = item || {};

    return (
      <TouchableOpacity
        onPress={() => onTransactionButtonPress(item)}
        style={styles.transactionItemWrapper}>
        <View style={styles.transactionItemRow}>
          <Text style={styles.transactionText} numberOfLines={1}>
            {description}
          </Text>
          <Text
            style={styles.transactionTextDeduct}
            onPress={onBiometricButtonPress}>{`-RM ${
            isMasked ? '****' : amount
          }`}</Text>
        </View>
        <View style={styles.transactionItemRow}>
          <Text style={styles.transactionDate}>{date}</Text>
          <Text style={styles.transactionType}>{type}</Text>
        </View>
        <Text onPress={onBiometricButtonPress}>{`Payment Id: ${
          isMasked ? '****' : id
        }`}</Text>
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
