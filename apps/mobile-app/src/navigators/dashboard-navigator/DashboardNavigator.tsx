import { HomePage, SettingsPage } from '@bintang-bank/pages';
import { AppRoutes, DashboardParamList } from '@bintang-bank/shared';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator<DashboardParamList>();

/* eslint-disable-next-line */
export interface DashboardNavigatorProps {}

export function DashboardNavigator(props: DashboardNavigatorProps) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={AppRoutes.Home} component={HomePage} />
      <Tab.Screen name={AppRoutes.Settings} component={SettingsPage} />
    </Tab.Navigator>
  );
}

export default DashboardNavigator;
