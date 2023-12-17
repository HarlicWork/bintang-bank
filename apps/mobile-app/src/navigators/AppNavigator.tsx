import React from 'react';

import {
  DashboardPage,
  SomethingWrongPage,
  StartupPage,
} from '@bintang-bank/pages';
import { AppRoutes, RootStackParamList } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={AppRoutes.Startup} component={StartupPage} />
        <Stack.Screen name={AppRoutes.Dashboard} children={DashboardPage} />
        <Stack.Screen
          name={AppRoutes.SomethingWrong}
          component={SomethingWrongPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
