import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/UserState';

const initialState: UserState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  refreshToken: '',
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { setUserState, reset } = userSlice.actions;

export default userSlice.reducer;
