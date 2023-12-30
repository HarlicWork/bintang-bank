import '@bintang-bank/shared/styles/unistyles';
import React, { Suspense, lazy } from 'react';

import { persistor, store } from '@bintang-bank/entities/store/store';
import { SomethingWrongPage } from '@bintang-bank/pages';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';

const AppNavigator = lazy(
  () => import('../../../../libs/pages/src/navigators/AppNavigator')
);

export const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<SomethingWrongPage />} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Suspense
            fallback={<ActivityIndicator size="large" color="#0000ff" />}
          >
            <AppNavigator />
          </Suspense>
        </GestureHandlerRootView>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
