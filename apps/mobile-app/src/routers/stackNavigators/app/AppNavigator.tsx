import React from 'react';

import { StartupPage } from '@bintang-bank/pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../../app-routes';
import { RootStackParamList } from '../../root-stack-param-list.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

/* eslint-disable-next-line */
export interface AppNavigatorProps {}

export function AppNavigator(props: AppNavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.Startup}
        component={StartupPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
