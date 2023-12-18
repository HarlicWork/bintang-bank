import { AppRoutes } from './app-routes';

export type RootStackParamList = {
  [AppRoutes.Startup]: undefined;
  [AppRoutes.SomethingWrong]: undefined;
  [AppRoutes.Dashboard]: undefined;
};

export type DashboardParamList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Settings]: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList { }
    interface RootParamList extends DashboardParamList { }
  }
}
