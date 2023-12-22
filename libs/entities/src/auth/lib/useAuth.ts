// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppRoutes, RootStackParamList, logger } from '@bintang-bank/shared';
import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import Snackbar from 'react-native-snackbar';
import { useStyles } from 'react-native-unistyles';
import { Error } from '../interfaces/Error';
import { getErrorText } from './getErrorText';

export const useAuth = () => {
  const { theme } = useStyles();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInUser = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);

      setIsLoading(false);
      navigate(AppRoutes.Dashboard, undefined);
      logger('result', result);
    } catch (error) {
      setIsLoading(false);
      logger('error', error);
      Snackbar.show({
        text: getErrorText(error as Error),
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.error,
      });
    }
  };

  return { signInUser, isLoading };
};
