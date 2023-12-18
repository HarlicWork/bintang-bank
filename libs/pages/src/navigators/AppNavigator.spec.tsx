import React from 'react';
import { render } from '@testing-library/react-native';

import AppNavigator from './AppNavigator';

describe('AppNavigator', () => {
  it('should render successfully', () => {
    const { root } = render(<AppNavigator />);
    expect(root).toBeTruthy();
  });
});
