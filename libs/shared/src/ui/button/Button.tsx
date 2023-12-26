import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Typo from '../typo/Typo';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ title, onPress, disabled }: ButtonProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TouchableHighlight
      underlayColor={theme.colors.onPrimaryContainer}
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      {disabled ? (
        <ActivityIndicator size={'small'} color={theme.colors.onPrimary} />
      ) : (
        <Typo preset="title" color={theme.colors.onPrimary} textAlign="center">
          {title}
        </Typo>
      )}
    </TouchableHighlight>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    width: 'auto',
    height: 40,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
}));

export default Button;
