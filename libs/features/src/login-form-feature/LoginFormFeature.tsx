import { useAuth } from '@bintang-bank/entities';
import { Button, TextInput, TextInputRef, Typo } from '@bintang-bank/shared';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface LoginFormFeatureProps {}

export function LoginFormFeature(props: LoginFormFeatureProps) {
  const { styles } = useStyles(stylesheet);
  const { signInUser, isLoading } = useAuth();
  const { t } = useTranslation(['common', 'login']);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const passwordTextInputRef = useRef<TextInputRef>(null);

  const onHandleLogin = () => {
    signInUser(email, password);
  };

  return (
    <View style={styles.loginFormContainer}>
      <Typo
        text="welcome"
        screen={['login']}
        preset="h1"
        style={styles.welcomeLabel}
      />
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder={t('login:email')}
        value={email}
        autoCapitalize="none"
        editable={!isLoading}
        returnKeyType="next"
        onSubmitEditing={() => passwordTextInputRef.current?.onFocus()}
      />
      <TextInput
        ref={passwordTextInputRef}
        onChangeText={(value) => setPassword(value)}
        placeholder={t('login:password')}
        secureTextEntry={true}
        value={password}
        editable={!isLoading}
      />
      <View style={styles.btnContainer}>
        <Button
          title={t('common:common.login')}
          onPress={onHandleLogin}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  loginFormContainer: {
    gap: 10,
    alignItems: 'center',
  },
  welcomeLabel: { marginBottom: 20 },
  btnContainer: {
    width: 100,
  },
}));

export default LoginFormFeature;
