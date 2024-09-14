import {createStackNavigator} from '@react-navigation/stack';

import {Login, Splash, TransactionDetails, TransactionHistory} from '~screens';

import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
    </Stack.Navigator>
  );
}
