/* eslint-disable @nx/enforce-module-boundaries */
import { HomePage, SettingsPage } from '@bintang-bank/pages';
import {
  AppRoutes,
  DashboardParamList,
  TopTabsLayout,
} from '@bintang-bank/shared';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { DashboardTabBar } from '@bintang-bank/features';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Tab = createBottomTabNavigator<DashboardParamList>();

/* eslint-disable-next-line */
export interface DashboardNavigatorProps {}

export function DashboardNavigator(props: DashboardNavigatorProps) {
  const { styles } = useStyles(stylesheet);

  const tabs = [
    {
      name: AppRoutes.Home,
      component: HomePage,
    },
    {
      name: AppRoutes.Accounts,
      component: TopTabsLayout,
    },
    {
      name: AppRoutes.Settings,
      component: SettingsPage,
    },
  ] as const;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
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
          {tabs.map((tab) => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
            />
          ))}
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
}));

export default DashboardNavigator;
