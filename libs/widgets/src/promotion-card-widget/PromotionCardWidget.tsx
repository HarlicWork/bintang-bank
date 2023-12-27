import { ScrollableCards } from '@bintang-bank/features';

import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface PromotionCardWidgetProps {}

export function PromotionCardWidget(props: PromotionCardWidgetProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <ScrollableCards />
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
}));

export default PromotionCardWidget;
