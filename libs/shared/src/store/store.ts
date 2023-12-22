/* eslint-disable @nx/enforce-module-boundaries */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { reduxStorage, storageMmkv } from '../context/storage';

import authReducer from '@bintang-bank/entities/auth/slices/authSlice';
import userReducer from '@bintang-bank/entities/users/slices/userSlice';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  version: 0,
  whitelist: ['user'],
  stateReconciler: autoMergeLevel2,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  migrate: (state: any) => {
    return Promise.resolve(state);
  },
};

const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {},
      },
    });

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      initializeMMKVFlipper({ default: storageMmkv });
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootReducer = ReturnType<typeof rootReducer>;

export default store;
