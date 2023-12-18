import { HomePage, SettingsPage } from '@bintang-bank/pages';
import { AppRoutes, DashboardParamList, Icon } from '@bintang-bank/shared';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const Tab = createBottomTabNavigator<DashboardParamList>();

/* eslint-disable-next-line */
export interface DashboardNavigatorProps {}

export function DashboardNavigator(props: DashboardNavigatorProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string;

          switch (route.name) {
            case AppRoutes.Home:
              iconName = 'home';
              break;
            case AppRoutes.Settings:
              iconName = 'gear';
              break;
            default:
              break;
          }

          return (
            <Icon name={iconName} size={focused ? 35 : 32} color={color} />
          );
        },
        tabBarActiveTintColor: theme.colors.typography,
        tabBarInactiveTintColor: theme.colors.onTypography,
        tabBarBackground: () => {
          return <View style={styles.tabBarBackground} />;
        },
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
        tabBarLabelStyle: {
          ...styles.tabBarLabelStyle,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={AppRoutes.Home} component={HomePage} />
      <Tab.Screen name={AppRoutes.Settings} component={SettingsPage} />
    </Tab.Navigator>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  tabBarBackground: {
    height: '100%',
    backgroundColor: colors.onPrimary,
  },
  tabBarStyle: {
    height: 70,
    width: '100%',
    borderTopColor: colors.onPrimary,
    borderTopWidth: 1,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}));

export default DashboardNavigator;
