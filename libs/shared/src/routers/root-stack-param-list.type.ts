import { AppRoutes } from './app-routes';

export type RootStackParamList = {
  [AppRoutes.Startup]: undefined;
  [AppRoutes.Login]: undefined;
  [AppRoutes.SomethingWrong]: undefined;
  [AppRoutes.Dashboard]: undefined;
  [AppRoutes.CreateDisplayName]: undefined;
  [AppRoutes.GeneralModal]: undefined;
  [AppRoutes.ConnectionError]: undefined;
};

export type DashboardParamList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Settings]: undefined;
  [AppRoutes.Accounts]: undefined;
};

export type AccountsStactkParamList = {
  [AppRoutes.AccountList]: undefined;
  [AppRoutes.CardList]: undefined;
  [AppRoutes.FixedDeposit]: undefined;
  [AppRoutes.Loan]: undefined;
  [AppRoutes.Wealth]: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends DashboardParamList {}
  }
}
