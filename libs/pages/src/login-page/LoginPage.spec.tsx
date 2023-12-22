import React from 'react';
import { render } from '@testing-library/react-native';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('should render successfully', () => {
    const { root } = render(<LoginPage />);
    expect(root).toBeTruthy();
  });
});
