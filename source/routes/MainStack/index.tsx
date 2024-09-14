import {createStackNavigator} from '@react-navigation/stack';

import {Login, Splash, TransactionDetails, TransactionHistory} from '~screens';

import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          title: 'Transaction History',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
    </Stack.Navigator>
  );
}
