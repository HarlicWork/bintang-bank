import { Card, screenHeight, screenWidth } from '@bintang-bank/shared';
import { FlatList, Platform, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Data = { id: number; name: string };

const data = Array.from({ length: 10 }, (_, i): Data => {
  return {
    id: i,
    name: `Item ${i + 1}`,
  };
});

const SPACING_FOR_CARD_INSET = screenWidth * 0.05 - data.length;
const CARD_WIDTH = screenWidth * 0.8;
const CARD_HEIGHT = screenHeight * 0.2;

/* eslint-disable-next-line */
export interface ScrollableCardsProps {
  horizontal?: boolean;
}

export function ScrollableCards({ horizontal = true }: ScrollableCardsProps) {
  const { styles } = useStyles(stylesheet);

  const renderItem = ({ item }: { item: Data }) => {
    return (
      <Card styles={styles.cardContainerStyle}>
        <Text>{item.name}</Text>
      </Card>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      initialNumToRender={5}
      horizontal={horizontal}
      contentContainerStyle={{
        paddingHorizontal:
          Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
      }}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      decelerationRate={0}
      snapToInterval={CARD_WIDTH + 10}
      snapToAlignment="center"
      contentInset={{
        top: 0,
        left: SPACING_FOR_CARD_INSET,
        bottom: 0,
        right: SPACING_FOR_CARD_INSET,
      }}
    />
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  cardContainerStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  separator: {
    width: 16,
  },
}));

export default ScrollableCards;
