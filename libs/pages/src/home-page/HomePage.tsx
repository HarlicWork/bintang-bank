import { SafeScreen } from '@bintang-bank/shared';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <SafeScreen>
      <Text>Welcome to HomePage!</Text>
    </SafeScreen>
  );
}

export default HomePage;
