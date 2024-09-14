import {createStackNavigator} from '@react-navigation/stack';

import {Splash} from '../../screens';

import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}
