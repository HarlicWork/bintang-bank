// eslint-disable-next-line @nx/enforce-module-boundaries
import { useAppDispatch } from '@bintang-bank/shared';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';

import { UserState } from '@bintang-bank/entities/users/interfaces/UserState';
import { setUserState } from '@bintang-bank/entities/users/slices/userSlice';
import Snackbar from 'react-native-snackbar';
import { useStyles } from 'react-native-unistyles';
import { Error } from '../interfaces/Error';
import { setAuth } from '../slices/authSlice';
import { getErrorText } from './getErrorText';

export const useAuth = () => {
  const { theme } = useStyles();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInUser = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);

      const refreshToken = await result.user?.getIdToken();

      const user: UserState = {
        displayName: result.user?.displayName,
        email: result.user?.email,
        phoneNumber: result.user?.phoneNumber,
        photoURL: result.user?.photoURL,
        uid: result.user?.uid,
        refreshToken,
      };

      setIsLoading(false);

      dispatch(setUserState(user));
      dispatch(setAuth(true));
    } catch (error) {
      setIsLoading(false);

      Snackbar.show({
        text: getErrorText(error as Error),
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.error,
      });
    }
  };

  return { signInUser, isLoading };
};
