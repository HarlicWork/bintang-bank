import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export function Card({ children, styles: customStyles }: CardProps) {
  const { styles } = useStyles(stylesheet);
  return <View style={[styles.container, customStyles]}>{children}</View>;
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
