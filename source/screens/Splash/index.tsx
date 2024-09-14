import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';
import {SplashProps} from './types';

export default function Splash({navigation, route}: SplashProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to splash screen</Text>
    </SafeAreaView>
  );
}
