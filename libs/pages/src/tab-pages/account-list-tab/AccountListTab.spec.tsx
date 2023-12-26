import React from 'react';
import { render } from '@testing-library/react-native';

import AccountListTab from './AccountListTab';

describe('AccountListTab', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountListTab />);
    expect(root).toBeTruthy();
  });
});
