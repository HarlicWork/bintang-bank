import React from 'react';
import { render } from '@testing-library/react-native';

import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('should render successfully', () => {
    const { root } = render(<DashboardPage />);
    expect(root).toBeTruthy();
  });
});
