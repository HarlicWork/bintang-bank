import { LoginFormFeature } from '@bintang-bank/features';
import { Image, SafeScreen } from '@bintang-bank/shared';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import assets from '@bintang-bank/assets';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeScreen>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Image
          source={assets.bankLogo}
          resizeMode="cover"
          customStyles={{
            width: 200,
            height: 100,
            marginBottom: 40,
          }}
        />
        <LoginFormFeature />
      </KeyboardAvoidingView>
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
