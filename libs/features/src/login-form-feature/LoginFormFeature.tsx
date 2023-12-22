import { useAuth } from '@bintang-bank/entities';
import { Button, TextInput } from '@bintang-bank/shared';
import { useState } from 'react';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface LoginFormFeatureProps {}

export function LoginFormFeature(props: LoginFormFeatureProps) {
  const { styles } = useStyles(stylesheet);
  const { signInUser, isLoading } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onHandleLogin = () => {
    signInUser(email, password);
  };

  return (
    <View style={styles.loginFormContainer}>
      <TextInput
        style={styles.usernameTextInput}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        editable={!isLoading}
      />
      <TextInput
        style={styles.usernameTextInput}
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        editable={!isLoading}
      />
      <Button title="Login" onPress={onHandleLogin} disabled={isLoading} />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  loginFormContainer: {
    gap: 10,
  },
  usernameTextInput: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: theme.colors.onBackground,
    borderRadius: 10,
    borderWidth: 1,
    color: theme.colors.onBackground,
  },
  passwordTextInput: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: theme.colors.onBackground,
    borderRadius: 10,
    borderWidth: 1,
    color: theme.colors.onBackground,
  },
}));

export default LoginFormFeature;
