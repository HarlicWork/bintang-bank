import { AccountsPage, HomePage, SettingsPage } from '@bintang-bank/pages';
import { AppRoutes, DashboardParamList } from '@bintang-bank/shared';
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
          <Tab.Screen name={AppRoutes.Home} component={HomePage} />
          <Tab.Screen name={AppRoutes.Accounts} component={AccountsPage} />
          <Tab.Screen name={AppRoutes.Settings} component={SettingsPage} />
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
