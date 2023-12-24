import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Typo from '../typo/Typo';

/* eslint-disable-next-line */
export interface ButtonSecondaryProps {
  title: string;
  onPress: (value: string) => void;
  disabled?: boolean;
}

export function ButtonSecondary({
  title,
  onPress,
  disabled,
}: ButtonSecondaryProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TouchableHighlight
      underlayColor={theme.colors.onPrimaryFixedVariant}
      style={styles.container}
      onPress={(val) => onPress}
      disabled={disabled}
    >
      {disabled ? (
        <ActivityIndicator size={'small'} color={theme.colors.onPrimary} />
      ) : (
        <Typo text={title} preset="title" color={theme.colors.onPrimary} />
      )}
    </TouchableHighlight>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    width: 'auto',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default ButtonSecondary;
