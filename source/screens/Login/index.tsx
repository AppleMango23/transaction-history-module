import React from 'react';

import {Alert, Text, TouchableOpacity, View} from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics';

import {styles} from './styles';
import {LoginProps} from './types';

export default function Login({navigation, route}: LoginProps) {
  const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

  // MARK: Events
  async function onBiometricButtonPress() {
    try {
      const {success, error} = await biometrics.simplePrompt({
        promptMessage: 'Confirmation',
      });

      if (!success) {
        throw error;
      }

      navigation.replace('TransactionHistory');
    } catch (error) {
      Alert.alert('Something went wrong', error);
    }
  }

  // MARK: Render Methods
  function renderBiometricButton() {
    return (
      <TouchableOpacity
        onPress={onBiometricButtonPress}
        style={styles.biometricButton}>
        <Text style={styles.biometricButtonText}>
          {'Start Biometric session'}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Welcome User'}</Text>
      <Text style={styles.description}>
        {
          'The app required user to unlock via biometric sensor for security reason. Please press on the button below to activate the process.'
        }
      </Text>
      {renderBiometricButton()}
    </View>
  );
}
