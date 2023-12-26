import { useAuth } from '@bintang-bank/entities';
import { Button, TextInput, TextInputRef, Typo } from '@bintang-bank/shared';
import { useRef } from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface LoginFormFeatureProps {}

export function LoginFormFeature(props: LoginFormFeatureProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { signInUser, isLoading } = useAuth();
  const { t } = useTranslation(['common', 'login']);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const passwordTextInputRef = useRef<TextInputRef>(null);

  const onErrorMessage = (value: FieldError | undefined) => {
    switch (value?.type) {
      case 'pattern':
        return 'email_error_pattern';
      default:
        return 'field_error_required';
    }
  };

  const onHandleLogin = handleSubmit((data) => {
    signInUser(data.email, data.password);
  });

  return (
    <View style={styles.loginFormContainer}>
      <Typo
        text="welcome"
        screen={['login']}
        preset="h1"
        style={styles.welcomeLabel}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            placeholder={t('login:email')}
            value={value}
            autoCapitalize="none"
            editable={!isLoading}
            returnKeyType="next"
            onSubmitEditing={() => passwordTextInputRef.current?.onFocus()}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && (
        <Typo
          text={onErrorMessage(errors.email)}
          screen={['login']}
          color={theme.colors.error}
          preset={'h5'}
        />
      )}

      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            ref={passwordTextInputRef}
            onChangeText={onChange}
            placeholder={t('login:password')}
            secureTextEntry={true}
            value={value}
            editable={!isLoading}
          />
        )}
      />
      {errors.password && (
        <Typo
          text={onErrorMessage(errors.password)}
          screen={['login']}
          color={theme.colors.error}
          preset={'h5'}
        />
      )}

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
