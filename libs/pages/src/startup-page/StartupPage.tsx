import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import assets from '@bintang-bank/assets';
import { Image, LoadingIndicator, SafeScreen } from '@bintang-bank/shared';

/* eslint-disable-next-line */
export interface StartupPageProps {}

export function StartupPage(props: StartupPageProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <View style={styles.contentContainer}>
        <Image
          source={assets.bankLogo}
          customStyles={styles.imageStyles}
          resizeMode="cover"
        />
        <LoadingIndicator size="small" color={theme.colors.typography} />
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
