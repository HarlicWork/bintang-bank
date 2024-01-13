import {
  Button,
  Card,
  Typo,
  screenHeight,
  screenWidth,
} from '@bintang-bank/shared';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type Data = { id: number; name: string };

const data = Array.from({ length: 5 }, (_, i): Data => {
  return {
    id: i,
    name: `Item ${i + 1}`,
  };
});

const _spacing = 10;
const CARD_WIDTH = screenWidth * 0.8;
const CARD_HEIGHT = screenHeight * 0.2;

/* eslint-disable-next-line */
export interface ScrollableCardsProps {
  horizontal?: boolean;
}

export function ScrollableCards({ horizontal = true }: ScrollableCardsProps) {
  const { styles } = useStyles(stylesheet);

  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePressBack = () => {
    setIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const handlePressNext = () => {
    setIndex((prev) => {
      if (prev === data.length - 1) return prev;
      return prev + 1;
    });
  };

  const handlePressCard = (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    ref.current?.scrollToIndex({ index, animated: true, viewPosition: 0.5 });
    animatedValue.setValue(2);
  }, [index, animatedValue]);

  const renderItem = ({
    item,
    index: fIndex,
  }: {
    item: Data;
    index: number;
  }) => {
    return (
      <Pressable onPress={() => handlePressCard(fIndex)}>
        <Card key={fIndex} styles={styles.cardContainerStyle}>
          <Typo preset="title">{item.name}</Typo>
        </Card>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: _spacing }} />}
      />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Button title="Back" onPress={handlePressBack} />
        <Button title="Next" onPress={handlePressNext} />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    alignItems: 'center',
  },
  contentContainerStyle: {
    padding: _spacing,
  },
  cardContainerStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default ScrollableCards;
