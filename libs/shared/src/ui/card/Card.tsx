import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export function Card({ children, styles: customStyles }: CardProps) {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <LinearGradient
      start={{ x: 0, y: 0.25 }}
      end={{ x: 1, y: 2.0 }}
      colors={[theme.card.primary, theme.card.onPrimary, theme.card.onPrimary]}
      style={[styles.container, customStyles]}
    >
      {children}
    </LinearGradient>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    height: 200,
    width: 300,
    backgroundColor: colors.onPrimary,
    padding: 16,
    borderRadius: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
}));

export default Card;
