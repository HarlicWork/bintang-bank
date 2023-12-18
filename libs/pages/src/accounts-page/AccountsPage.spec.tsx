import React from 'react';
import { render } from '@testing-library/react-native';

import AccountsPage from './AccountsPage';

describe('AccountsPage', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountsPage />);
    expect(root).toBeTruthy();
  });
});
