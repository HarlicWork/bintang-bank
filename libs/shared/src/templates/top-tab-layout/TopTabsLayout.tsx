// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  AccountListTab,
  CardListTab,
  FixedDepositTab,
  LoanListTab,
  WealthTab,
} from '@bintang-bank/pages';
import { AppRoutes } from '@bintang-bank/shared/routers/app-routes';
import { AccountsStactkParamList } from '@bintang-bank/shared/routers/root-stack-param-list.type';
import { screenWidth } from '@bintang-bank/shared/utils/dimensions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Tab = createMaterialTopTabNavigator<AccountsStactkParamList>();

/* eslint-disable-next-line */
export interface TopTabsLayoutProps {}

export function TopTabsLayout(props: TopTabsLayoutProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation(['accounts']);

  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaView}>
      <Tab.Navigator
        initialRouteName={AppRoutes.AccountList}
        initialLayout={styles.initialLayout}
        backBehavior="history"
        keyboardDismissMode="auto"
        screenOptions={{
          lazy: true,
          lazyPreloadDistance: 1,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarAllowFontScaling: true,
          tabBarBounces: true,
          tabBarContentContainerStyle: styles.tabBarContentContainerStyle,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarPressColor: theme.colors.onPrimary,
          tabBarPressOpacity: 0.5,
          tabBarScrollEnabled: true,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name={AppRoutes.AccountList}
          component={AccountListTab}
          options={{ tabBarLabel: t('accounts:accounts') }}
        />
        <Tab.Screen
          name={AppRoutes.CardList}
          component={CardListTab}
          options={{ tabBarLabel: t('accounts:cards') }}
        />
        <Tab.Screen
          name={AppRoutes.FixedDeposit}
          component={FixedDepositTab}
          options={{ tabBarLabel: t('accounts:fixed_deposits') }}
        />
        <Tab.Screen
          name={AppRoutes.Loan}
          component={LoanListTab}
          options={{ tabBarLabel: t('accounts:loans') }}
        />
        <Tab.Screen
          name={AppRoutes.Wealth}
          component={WealthTab}
          options={{ tabBarLabel: t('accounts:wealth') }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.primary,
    height: 4,
    borderRadius: 4,
  },
  tabBarContentContainerStyle: {
    height: 50,
  },
  tabBarStyle: {
    backgroundColor: colors.background,
  },
  initialLayout: {
    width: screenWidth,
  },
}));

export default TopTabsLayout;
