import React from 'react';
import { render } from '@testing-library/react-native';

import SafeScreen from './SafeScreen';
import { View } from 'react-native';

describe('SafeScreen', () => {
  it('should render successfully', () => {
    const { root } = render(
      <SafeScreen>
        <View />
      </SafeScreen>
    );
    expect(root).toBeTruthy();
  });
});
