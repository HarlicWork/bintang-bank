import { SafeScreen, Typo } from '@bintang-bank/shared';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { View } from 'react-native';
import { CommonHeaderWidget } from '@bintang-bank/widgets';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <CommonHeaderWidget headerTitle="Home" />
      <View style={styles.container}>
        <Typo
          text="Welcome to HomePage!"
          color={theme.colors.onTypography}
          preset="h3"
        />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default HomePage;
