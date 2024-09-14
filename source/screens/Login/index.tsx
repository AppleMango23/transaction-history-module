import React, {useState} from 'react';

import {Alert, Text, View} from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics';

import {BlockButton} from '~components';

import {styles} from './styles';
import {LoginProps} from './types';

export default function Login({navigation, route}: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

  // MARK: Events
  async function onBiometricButtonPress() {
    try {
      setIsLoading(true);

      const {success, error} = await biometrics.simplePrompt({
        promptMessage: 'Confirmation',
      });

      if (!success) {
        throw error;
      }

      setTimeout(() => {
        navigation.replace('TransactionHistory');
      }, 1000);
    } catch (error) {
      Alert.alert('Something went wrong', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Welcome User'}</Text>
      <Text style={styles.description}>
        {
          'The app required user to unlock via biometric sensor for security reason. Please press on the button below to activate the process.'
        }
      </Text>
      <BlockButton
        text={'Start Biometric session'}
        style={styles.biometricButton}
        textStyle={styles.biometricButtonText}
        onPress={onBiometricButtonPress}
        isLoading={isLoading}
      />
    </View>
  );
}
