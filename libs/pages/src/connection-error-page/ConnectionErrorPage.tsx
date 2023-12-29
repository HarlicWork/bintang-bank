import assets from '@bintang-bank/assets';
import { Image, Typo } from '@bintang-bank/shared';
import { useTranslation } from 'react-i18next';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface ConnectionErrorPageProps {}

export function ConnectionErrorPage(props: ConnectionErrorPageProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation(['common']);

  return (
    <View style={styles.container}>
      <Image
        source={assets.offline}
        resizeMode="contain"
        customStyles={{
          height: 200,
          width: 200,
        }}
      />
      <Typo preset="h2" color={theme.colors.error}>
        {`${t('common:common.ohhNo')}`}
      </Typo>
      <Typo preset="h3" color={theme.colors.onSurface}>
        {`${t('common:common.internetConnectionError')}`}
      </Typo>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    height: 'auto',
    gap: 10,
    alignItems: 'center',
  },
}));

export default ConnectionErrorPage;
