import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';
import {SplashProps} from './types';

export default function Splash({navigation, route}: SplashProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Splash Screen</Text>
    </SafeAreaView>
  );
}
