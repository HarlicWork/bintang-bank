import {
  UserBankAccountItem,
  useUserBankAccount,
} from '@bintang-bank/entities';
import { useAppSelector } from '@bintang-bank/entities/store/hooks';
import { Typo } from '@bintang-bank/shared';
import { Skeleton } from 'moti/skeleton';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';

/* eslint-disable-next-line */
export interface TotalAccountDetailWidgetProps {}

export function TotalAccountDetailWidget(props: TotalAccountDetailWidgetProps) {
  const { styles, theme } = useStyles(stylesheet);
  const uid = useAppSelector((state) => state.user.uid);
  const { getUserBankAccount } = useUserBankAccount();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userBankAccount, setUserBankAccount] = useState<UserBankAccountItem[]>(
    []
  );

  const fetchUserBankAccount = async () => {
    setIsLoading(true);
    const data = getUserBankAccount(uid);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setUserBankAccount(data);
  };

  useEffect(() => {
    fetchUserBankAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skeletonCommonProps = {
    colorMode: UnistylesRuntime.colorScheme === 'dark' ? 'dark' : 'light',
    backgroundColor: '#d4d4d4',
    transition: {
      type: 'timing',
      duration: 2000,
    },
  } as const;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Skeleton.Group show={isLoading}>
          <Skeleton
            width={180}
            height={24}
            radius="round"
            {...skeletonCommonProps}
          >
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
          </Skeleton>
          <Skeleton
            width={120}
            height={14}
            radius="round"
            {...skeletonCommonProps}
          >
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
          </Skeleton>
          <Skeleton
            width={180}
            height={28}
            radius="round"
            {...skeletonCommonProps}
          >
            <Typo color={theme.colors.primary} preset="h2" textAlign="center">
              MYR {userBankAccount[0]?.amount}
            </Typo>
          </Skeleton>
        </Skeleton.Group>
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
    alignItems: 'center',
  },
}));

export default TotalAccountDetailWidget;
