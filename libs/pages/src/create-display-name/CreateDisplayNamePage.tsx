import { CreateNicknameForm } from '@bintang-bank/features';
import { SafeScreen, Typo } from '@bintang-bank/shared';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CreateDisplayNamePageProps {}

export function CreateDisplayNamePage(props: CreateDisplayNamePageProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.titleContainer}>
        <Typo text="title" screen={['createDisplayName']} preset="h1" />
        <Typo
          text="subtitle"
          screen={['createDisplayName']}
          preset="h4"
          color={theme.colors.secondary}
        />
      </View>
      <View style={styles.formContainer}>
        <CreateNicknameForm />
      </View>
    </SafeScreen>
  );
}

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
}));

export default CreateDisplayNamePage;
