import React from 'react';
import { render } from '@testing-library/react-native';

import DashboardTabBar from './DashboardTabBar';

describe('DashboardTabBar', () => {
  it('should render successfully', () => {
    const { root } = render(<DashboardTabBar />);
    expect(root).toBeTruthy();
  });
});
