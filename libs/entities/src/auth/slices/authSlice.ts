import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../interfaces/AuthState';

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuth: action.payload,
      };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { setAuthState: setAuth } = authSlice.actions;

export default authSlice.reducer;
