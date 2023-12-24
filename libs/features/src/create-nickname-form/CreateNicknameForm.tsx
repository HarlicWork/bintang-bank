import { useChangeNickname } from '@bintang-bank/entities';
import { Button, TextInput, Typo, logger } from '@bintang-bank/shared';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CreateNicknameFormProps {}

export function CreateNicknameForm(props: CreateNicknameFormProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation(['createDisplayName', 'common']);
  const { changeNickname } = useChangeNickname();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  const onErrorMessage = (nickname: FieldError | undefined) => {
    switch (nickname?.type) {
      case 'pattern':
        return 'nickname_error_pattern';
      case 'minLength':
        return 'nickname_error_minLength';
      default:
        return 'nickname_error_required';
    }
  };

  const onPressChangeNickname = handleSubmit((data) => {
    logger('data', data);
    changeNickname(data.nickname);
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.nicknameContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.nicknameTextInput}
              onChangeText={onChange}
              placeholder={t('createDisplayName:nickname')}
              value={value}
              autoCapitalize="none"
              editable={true}
            />
          )}
          name="nickname"
        />
        {errors.nickname && (
          <Typo
            text={onErrorMessage(errors.nickname)}
            screen={['createDisplayName']}
            color={theme.colors.error}
            preset={'h4'}
          />
        )}
      </View>

      <View style={styles.btnContainer}>
        <Button
          title={t('common:common.proceed')}
          onPress={onPressChangeNickname}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    marginTop: 32,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nicknameContainer: {
    gap: 10,
    alignItems: 'center',
  },
  nicknameTextInput: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: theme.colors.onBackground,
    borderRadius: 10,
    borderWidth: 1,
    color: theme.colors.onBackground,
  },
  btnContainer: {
    width: 200,
  },
}));

export default CreateNicknameForm;
