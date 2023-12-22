import { Icon, Typo } from '@bintang-bank/shared';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CommonHeaderPrimaryWidgetProps {
  username: string;
}

export function CommonHeaderPrimaryWidget({
  username,
}: CommonHeaderPrimaryWidgetProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.circleAvatar}>
        <Icon name="person" size={30} />
      </View>
      <View>
        <Typo
          screen={['home']}
          text={`hello`}
          preset="h4"
          color={theme.colors.primary}
        />
        <Typo text={username} preset="h4" color={theme.colors.primary} />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    height: 50,
    paddingHorizontal: 20,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  circleAvatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default CommonHeaderPrimaryWidget;
