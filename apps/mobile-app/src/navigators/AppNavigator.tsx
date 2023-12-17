import React from 'react';

import { StartupPage } from '@bintang-bank/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../routers/app-routes';
import { RootStackParamList } from '../routers/root-stack-param-list.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoutes.Startup}
          component={StartupPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
