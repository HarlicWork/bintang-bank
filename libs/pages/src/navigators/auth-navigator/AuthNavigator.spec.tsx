import React from 'react';
import { render } from '@testing-library/react-native';

import AuthNavigator from './AuthNavigator';

describe('AuthNavigator', () => {
  it('should render successfully', () => {
    const { root } = render(<AuthNavigator />);
    expect(root).toBeTruthy();
  });
});
