import React from 'react';
import { render } from '@testing-library/react-native';

import LoanListTab from './LoanListTab';

describe('LoanListTab', () => {
  it('should render successfully', () => {
    const { root } = render(<LoanListTab />);
    expect(root).toBeTruthy();
  });
});
