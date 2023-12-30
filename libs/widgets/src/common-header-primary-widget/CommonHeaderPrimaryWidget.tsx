import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { Icon, ModalServiceContext, Typo } from '@bintang-bank/shared';
import { useContext } from 'react';

import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CommonHeaderPrimaryWidgetProps {
  // onPress: () => void;
}

export function CommonHeaderPrimaryWidget(
  props: CommonHeaderPrimaryWidgetProps
) {
  const { styles, theme } = useStyles(stylesheet);
  const username = useAppSelector((state) => state.user.displayName);

  const { openProfileMenuModal } = useContext(ModalServiceContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circleAvatar}
        onPress={openProfileMenuModal}
      >
        <Icon name="person" size={30} />
      </TouchableOpacity>
      <View>
        <Typo
          screen={['home']}
          text={`hello`}
          preset="h4"
          color={theme.colors.primary}
        />
        <Typo
          text={username ? username : 'User'}
          preset="h4"
          color={theme.colors.primary}
        />
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
