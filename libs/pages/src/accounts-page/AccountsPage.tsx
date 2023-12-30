import { AccountSelectionModal } from '@bintang-bank/features';
import { ModalContextRef, TopTabsLayout } from '@bintang-bank/shared';
import { useContext } from 'react';

/* eslint-disable-next-line */
export interface AccountsPageProps {}

export function AccountsPage(props: AccountsPageProps) {
  const { accountSelectionSheetRef } = useContext(ModalContextRef);

  return (
    <>
      <TopTabsLayout />
      <AccountSelectionModal ref={accountSelectionSheetRef} />
    </>
  );
}

export default AccountsPage;
