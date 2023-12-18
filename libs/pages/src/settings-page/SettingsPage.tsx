import { SafeScreen } from '@bintang-bank/shared';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface SettingsPageProps {}

export function SettingsPage(props: SettingsPageProps) {
  return (
    <SafeScreen>
      <Text>Welcome to SettingsPage!</Text>
    </SafeScreen>
  );
}

export default SettingsPage;
