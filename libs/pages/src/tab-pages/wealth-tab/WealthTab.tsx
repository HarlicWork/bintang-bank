import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface WealthTabProps {}

export function WealthTab(props: WealthTabProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Welcome to WealthTab!</Text>
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

export default WealthTab;
