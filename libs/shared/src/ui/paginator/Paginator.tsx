import { Data } from '@bintang-bank/features';
import { Animated, View, useWindowDimensions } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface PaginatorProps {
  data: Data[];
  scrollX: Animated.Value;
}

export function Paginator({ data, scrollX }: PaginatorProps) {
  const { styles } = useStyles(stylesheet);
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={item.id}
            style={[styles.dotIndicator, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flexDirection: 'row',
  },
  dotIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
  },
}));

export default Paginator;
