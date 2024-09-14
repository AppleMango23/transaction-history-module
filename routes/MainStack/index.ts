import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {Login, OnBoarding, Register, Splash} from '~screens';
import PostingStack from '~routes/PostingStack';
import RootDrawerStack from '~routes/RootDrawerStack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="PostingStack"
        component={PostingStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      <Stack.Screen name="RootDrawerStack" component={RootDrawerStack} />
    </Stack.Navigator>
  );
}
