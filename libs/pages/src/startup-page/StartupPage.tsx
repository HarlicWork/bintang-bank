import { useEffect } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import assets from '@bintang-bank/assets';
import {
  AppRoutes,
  Image,
  LoadingIndicator,
  RootStackParamList,
  SafeScreen,
} from '@bintang-bank/shared';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@bintang-bank/shared/store/hooks';

/* eslint-disable-next-line */
export interface StartupPageProps {}

export function StartupPage(props: StartupPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { reset } = useNavigation<NavigationProp<RootStackParamList>>();
  const tokenIsExist = useAppSelector((state) => state.user.refreshToken);

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );

    if (tokenIsExist) {
      reset({
        index: 0,
        routes: [{ name: AppRoutes.Dashboard }],
      });

      return;
    }

    reset({
      index: 0,
      routes: [{ name: AppRoutes.Login }],
    });
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeScreen>
      <View style={styles.contentContainer}>
        <Image
          source={assets.bankLogo}
          customStyles={styles.imageStyles}
          resizeMode="cover"
        />
        <LoadingIndicator size="small" color={theme.colors.tertiary} />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: 200,
    height: 150,
  },
}));

export default StartupPage;
