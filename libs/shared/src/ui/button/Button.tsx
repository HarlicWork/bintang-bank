import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Typo from '../typo/Typo';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
}

export function Button({ title, onPress, disabled }: ButtonProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TouchableHighlight
      underlayColor={theme.colors.onPrimaryFixedVariant}
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <Typo text={title} preset="title" color={theme.colors.onPrimary} />
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

export default Button;
