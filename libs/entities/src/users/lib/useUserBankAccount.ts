import { UserAccountList } from '@bintang-bank/shared/utils/mockData';

export const useUserBankAccount = () => {
  const getUserBankAccount = (uid: string) => {
    const result = UserAccountList.accounts.filter(
      (account) => account.userId === uid
    );

    return result;
  };

  return { getUserBankAccount };
};
