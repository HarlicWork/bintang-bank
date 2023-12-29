import { LoginFormFeature } from '@bintang-bank/features';
import { Image } from '@bintang-bank/shared';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import assets from '@bintang-bank/assets';
import Animated, {
  Easing,
  FadeInDown
} from 'react-native-reanimated';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.duration(500).easing(Easing.ease)}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.imgContainer}>
          <Image
            source={assets.bankLogo}
            resizeMode="cover"
            customStyles={styles.imgCustomStyles}
          />
        </View>
        <LoginFormFeature />
      </KeyboardAvoidingView>
    </Animated.View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
  },
  imgCustomStyles: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
}));

export default LoginPage;
