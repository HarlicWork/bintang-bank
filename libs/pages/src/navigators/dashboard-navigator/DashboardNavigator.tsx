import { AccountsPage, HomePage, SettingsPage } from '@bintang-bank/pages';
import { AppRoutes, DashboardParamList } from '@bintang-bank/shared';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import { DashboardTabBar } from '@bintang-bank/features';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<DashboardParamList>();

/* eslint-disable-next-line */
export interface DashboardNavigatorProps {}

export function DashboardNavigator(props: DashboardNavigatorProps) {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.topSafeArea} />
      <SafeAreaView edges={['bottom']} style={styles.btmSafeArea}>
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
      </SafeAreaView>
    </>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  topSafeArea: {
    flex: 0,
    backgroundColor: colors.background,
  },
  btmSafeArea: {
    flex: 1,
    backgroundColor: colors.onPrimary,
  },
}));

export default DashboardNavigator;
