import React from 'react';
import { render } from '@testing-library/react-native';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render successfully', () => {
    const { root } = render(<HomePage />);
    expect(root).toBeTruthy();
  });
});
