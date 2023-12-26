import React from 'react';
import { render } from '@testing-library/react-native';

import UserAccountList from './UserAccountList';

describe('UserAccountList', () => {
  it('should render successfully', () => {
    const { root } = render(<UserAccountList />);
    expect(root).toBeTruthy();
  });
});
