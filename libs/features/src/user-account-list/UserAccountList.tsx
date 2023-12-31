import assets from '@bintang-bank/assets';
import {
  UserBankAccountItem,
  useUserBankAccount,
} from '@bintang-bank/entities';
import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { Card, Typo } from '@bintang-bank/shared';
import { useEffect, useRef, useState } from 'react';
import { PanResponder, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface UserAccountListProps {}

export function UserAccountList(props: UserAccountListProps) {
  const { styles, theme } = useStyles(stylesheet);
  const uid = useAppSelector((state) => state.user.uid);
  const { getUserBankAccount } = useUserBankAccount();
  const [userBankAccount, setUserBankAccount] = useState<UserBankAccountItem[]>(
    []
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const scrollPosition = useSharedValue<number>(0);
  const pullDownPosition = useSharedValue<number>(0);
  const isReadyToRefresh = useSharedValue<boolean>(false);

  const onRefresh = (done: () => void) => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      done();
    }, 1000);
  };

  const onPanRelease = () => {
    pullDownPosition.value = withTiming(isReadyToRefresh.value ? 75 : 0, {
      duration: 180,
    });

    if (isReadyToRefresh.value) {
      isReadyToRefresh.value = false;

      // A function that resets the animation
      const onRefreshComplete = () => {
        pullDownPosition.value = withTiming(0, { duration: 180 });
      };

      // trigger the refresh action
      onRefresh(onRefreshComplete);
    }
  };

  const panResponderRef = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) =>
        scrollPosition.value <= 0 && gestureState.dy >= 0,
      onPanResponderMove: (event, gestureState) => {
        const maxDistance = 150;
        pullDownPosition.value = Math.max(
          Math.min(maxDistance, gestureState.dy),
          0
        );

        if (
          pullDownPosition.value >= maxDistance / 2 &&
          isReadyToRefresh.value === false
        ) {
          isReadyToRefresh.value = true;
          console.log('Ready to refresh');
        }

        if (
          pullDownPosition.value < maxDistance / 2 &&
          isReadyToRefresh.value === true
        ) {
          isReadyToRefresh.value = false;
          console.log('Will not refresh on release');
        }
      },
      onPanResponderRelease: onPanRelease,
      onPanResponderTerminate: onPanRelease,
    })
  );

  const pullDownStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pullDownPosition.value,
        },
      ],
    };
  });

  const refreshContainerStyles = useAnimatedStyle(() => {
    return {
      height: pullDownPosition.value,
    };
  });

  const refreshIconStyles = useAnimatedStyle(() => {
    const scale = Math.min(1, Math.max(0, pullDownPosition.value / 75));

    return {
      opacity: refreshing
        ? withDelay(100, withTiming(0, { duration: 20 }))
        : Math.max(0, pullDownPosition.value - 25) / 50,
      transform: [
        {
          scaleX: refreshing ? withTiming(0.15, { duration: 120 }) : scale,
        },
        {
          scaleY: scale,
        },
        {
          rotate: `${pullDownPosition.value * 3}deg`,
        },
      ],
      backgroundColor: refreshing ? '#fff' : 'transparent',
    };
  }, [refreshing]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollPosition.value = event.contentOffset.y;
    },
  });
  useEffect(() => {
    const data = getUserBankAccount(uid);
    setUserBankAccount(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const renderItem = ({ item }: { item: UserBankAccountItem }) => {
    return (
      <Card styles={styles.cardStyle}>
        <Typo preset="title" color={theme.colors.onSecondary}>
          {item.accountName}
        </Typo>
        <Typo preset="h5" color={theme.colors.onSecondaryContainer}>
          {item.accountNumber}
        </Typo>
        <View style={styles.amountContainer}>
          <Typo
            preset="h5"
            style={styles.amountText}
            color={theme.colors.onSecondaryContainer}
          >
            MYR {item.amount}
          </Typo>
        </View>
      </Card>
    );
  };

  return (
    <View pointerEvents={refreshing ? 'none' : 'auto'} style={styles.root}>
      <Animated.View style={[styles.refreshContainer, refreshContainerStyles]}>
        {refreshing && (
          <Typo
            preset="h5"
            color={theme.colors.onSecondaryContainer}
            textAlign="center"
          >
            Loading
          </Typo>
        )}
        <Animated.Image
          source={assets.refresh}
          style={[styles.refreshIcon, refreshIconStyles]}
        />
      </Animated.View>
      <Animated.View
        style={[styles.container, pullDownStyles]}
        {...panResponderRef.current.panHandlers}
      >
        <Animated.FlatList
          data={userBankAccount}
          contentContainerStyle={styles.cardContainerStyle}
          keyExtractor={(item) => item.id.toString()}
          overScrollMode="never"
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
      </Animated.View>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  refreshContainer: {
    // flex: 1,
  },
  refreshIcon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    marginTop: 16,
  },
  cardStyle: {
    width: '100%',
    height: 80,
  },
  cardContainerStyle: { padding: 16 },
  seperator: {
    height: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  amountText: {
    fontWeight: 'bold',
  },
}));

export default UserAccountList;
