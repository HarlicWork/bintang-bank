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
    resetAuth: () => {
      return initialState;
    },
  },
});

export const { setAuthState, resetAuth } = authSlice.actions;

export default authSlice.reducer;
