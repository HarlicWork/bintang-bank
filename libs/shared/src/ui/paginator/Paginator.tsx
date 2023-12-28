import { Data } from '@bintang-bank/features';
import { Animated } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ExpandingDot } from 'react-native-animated-pagination-dots';

/* eslint-disable-next-line */
export interface PaginatorProps {
  data: Data[];
  scrollX: Animated.Value;
}

export function Paginator({ data, scrollX }: PaginatorProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <ExpandingDot
      data={data}
      expandingDotWidth={20}
      scrollX={scrollX}
      inActiveDotOpacity={0.6}
      inActiveDotColor={theme.colors.onPrimaryFixedVariant}
      activeDotColor={theme.colors.primary}
      dotStyle={styles.dotIndicator}
      containerStyle={styles.containerStyle}
    />
  );
}

const stylesheet = createStyleSheet(() => ({
  containerStyle: { position: 'absolute', top: 150 },
  dotIndicator: {
    width: 8,
    height: 8,
  },
}));

export default Paginator;
