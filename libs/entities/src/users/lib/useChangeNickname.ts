import { Error } from '@bintang-bank/entities/auth/interfaces/Error';
import { getErrorText } from '@bintang-bank/entities/auth/lib/getErrorText';
import { useAppDispatch } from '@bintang-bank/entities/store/hooks';
import Snackbar from 'react-native-snackbar';
import { useStyles } from 'react-native-unistyles';
import { setDisplayName } from '../slices/userSlice';

export const useChangeNickname = () => {
  const { theme } = useStyles();
  const dispatch = useAppDispatch();

  const changeNickname = (name: string) => {
    try {
      dispatch(setDisplayName(name));
    } catch (error) {
      Snackbar.show({
        text: getErrorText(error as Error),
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.error,
      });
    }
  };

  return { changeNickname };
};
