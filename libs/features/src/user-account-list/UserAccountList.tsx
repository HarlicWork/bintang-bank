import {
  UserBankAccountItem,
  useUserBankAccount,
} from '@bintang-bank/entities';
import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { Card, Typo } from '@bintang-bank/shared';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
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

  useEffect(() => {
    const data = getUserBankAccount(uid);
    setUserBankAccount(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const renderItem = useCallback(
    ({ item }: { item: UserBankAccountItem }) => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.colors.primary]
  );

  return (
    <FlatList
      data={userBankAccount}
      contentContainerStyle={styles.cardContainerStyle}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const stylesheet = createStyleSheet(({ colors }) => ({
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
