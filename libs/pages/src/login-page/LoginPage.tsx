import { SafeScreen } from '@bintang-bank/shared';

import { LoginFormFeature } from '@bintang-bank/features';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <View style={styles.container}>
        <LoginFormFeature />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default LoginPage;
