import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import {styles} from './styles';
import {LoginProps} from './types';

export default function Login({navigation, route}: LoginProps) {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
}
