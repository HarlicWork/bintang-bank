export interface UserBankAccount {
  accounts: UserBankAccountItem[];
}

export interface UserBankAccountItem {
  id: number;
  userId: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  accountType: 'Savings' | 'Current' | 'Cash Deposit' | 'Fixed Deposit';
  amount: string;
  isDormant: boolean;
  createdAt: Date;
}
