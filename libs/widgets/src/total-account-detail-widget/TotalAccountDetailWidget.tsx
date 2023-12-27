import {
  UserBankAccountItem,
  useUserBankAccount,
} from '@bintang-bank/entities';
import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { Typo } from '@bintang-bank/shared';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface TotalAccountDetailWidgetProps {}

export function TotalAccountDetailWidget(props: TotalAccountDetailWidgetProps) {
  const { styles, theme } = useStyles(stylesheet);
  const uid = useAppSelector((state) => state.user.uid);
  const { getUserBankAccount } = useUserBankAccount();

  const [userBankAccount, setUserBankAccount] = useState<UserBankAccountItem[]>(
    []
  );
  const data = getUserBankAccount(uid);

  useEffect(() => {
    setUserBankAccount(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Typo
          color={theme.colors.tertiary}
          preset="h3"
          style={{
            fontWeight: '700',
            letterSpacing: 0.25,
          }}
          textAlign="center"
        >
          {userBankAccount[0]?.accountName}
        </Typo>
        <Typo
          color={theme.colors.tertiary}
          preset="title"
          style={{
            letterSpacing: 0.25,
          }}
          textAlign="center"
        >
          {userBankAccount[0]?.accountNumber}
        </Typo>
        <Typo color={theme.colors.primary} preset="h2" textAlign="center">
          MYR {userBankAccount[0]?.amount}
        </Typo>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelContainer: {
    gap: 8,
  },
}));

export default TotalAccountDetailWidget;
