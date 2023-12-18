import { AccountsPage, HomePage, SettingsPage } from '@bintang-bank/pages';
import { AppRoutes, DashboardParamList } from '@bintang-bank/shared';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import { DashboardTabBar } from '@bintang-bank/features';

const Tab = createBottomTabNavigator<DashboardParamList>();

/* eslint-disable-next-line */
export interface DashboardNavigatorProps {}

export function DashboardNavigator(props: DashboardNavigatorProps) {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation }: BottomTabBarProps) => (
        <DashboardTabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
    >
      <Tab.Screen name={AppRoutes.Home} component={HomePage} />
      <Tab.Screen name={AppRoutes.Accounts} component={AccountsPage} />
      <Tab.Screen name={AppRoutes.Settings} component={SettingsPage} />
    </Tab.Navigator>
  );
}

export default DashboardNavigator;
