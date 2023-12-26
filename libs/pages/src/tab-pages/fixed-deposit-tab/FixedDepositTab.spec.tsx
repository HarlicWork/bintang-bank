import React from 'react';
import { render } from '@testing-library/react-native';

import FixedDepositTab from './FixedDepositTab';

describe('FixedDepositTab', () => {
  it('should render successfully', () => {
    const { root } = render(<FixedDepositTab />);
    expect(root).toBeTruthy();
  });
});
