import { SafeScreen } from '@bintang-bank/shared';
import { useState } from 'react';

import { useAuth } from '@bintang-bank/entities';
import { Button, TextInput, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { signInUser, isLoading } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onHandleLogin = () => {
    signInUser(email, password);
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.loginFormContainer}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              padding: 10,
              borderColor: theme.colors.onBackground,
              borderRadius: 10,
              borderWidth: 1,
            }}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            editable={!isLoading}
          />
          <TextInput
            style={{
              height: 40,
              width: 200,
              padding: 10,
              borderColor: theme.colors.onBackground,
              borderRadius: 10,
              borderWidth: 1,
            }}
            onChangeText={(value) => setPassword(value)}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            editable={!isLoading}
          />
        </View>
        <Button title="Login" onPress={onHandleLogin} disabled={isLoading} />
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
  loginFormContainer: {
    gap: 10,
  },
}));

export default LoginPage;
