import React from 'react';

import { SomethingWrongPage, StartupPage } from '@bintang-bank/pages';
import { AppRoutes, RootStackParamList } from '@bintang-bank/shared';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardNavigator from './dashboard-navigator/DashboardNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={AppRoutes.Startup} component={StartupPage} />
        <Stack.Screen
          name={AppRoutes.Dashboard}
          children={DashboardNavigator}
        />
        <Stack.Screen
          name={AppRoutes.SomethingWrong}
          component={SomethingWrongPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
