import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface CardListTabProps {}

export function CardListTab(props: CardListTabProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Welcome to CardListTab!</Text>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
}));

export default CardListTab;
