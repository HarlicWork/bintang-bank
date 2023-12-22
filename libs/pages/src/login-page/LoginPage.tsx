import {
  AppRoutes,
  RootStackParamList,
  SafeScreen,
  logger,
} from '@bintang-bank/shared';
import React, { useState } from 'react';

import { View, TextInput, Button } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const { styles } = useStyles(stylesheet);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const onHandleSubmit = () => {
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoading(false);
        // Signed in
        logger('userCredential', userCredential);
        navigate(AppRoutes.Dashboard, undefined);
      })
      .catch((error) => {
        setLoading(false);
        logger('error', error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.loginFormContainer}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            editable={!loading}
          />
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={(value) => setPassword(value)}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            editable={!loading}
          />
        </View>
        <Button title="Submit" onPress={onHandleSubmit} disabled={loading} />
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
