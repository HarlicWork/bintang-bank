import { useChangeNickname } from '@bintang-bank/entities';
import { Button, TextInput, logger } from '@bintang-bank/shared';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CreateNicknameFormProps {}

export function CreateNicknameForm(props: CreateNicknameFormProps) {
  const { styles } = useStyles(stylesheet);
  const { t } = useTranslation(['createDisplayName', 'common']);
  const { changeNickname } = useChangeNickname();

  const [nickname, setNickname] = useState<string>('');

  const onPressChangeNickname = () => {
    logger('press');
    changeNickname(nickname);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        style={styles.nicknameTextInput}
        onChangeText={(text) => setNickname(text)}
        placeholder={t('createDisplayName:nickname')}
        value={nickname}
        autoCapitalize="none"
        editable={true}
      />

      <Button
        title={t('common:common.proceed')}
        onPress={onPressChangeNickname}
      />
    </KeyboardAvoidingView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    marginTop: 32,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
}));

export default CreateNicknameForm;
