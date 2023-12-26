import React from 'react';
import { render } from '@testing-library/react-native';

import WealthTab from './WealthTab';

describe('WealthTab', () => {
  it('should render successfully', () => {
    const { root } = render(<WealthTab />);
    expect(root).toBeTruthy();
  });
});
