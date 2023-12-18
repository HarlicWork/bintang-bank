import React from 'react';
import { render } from '@testing-library/react-native';

import DashboardNavigator from './DashboardNavigator';

describe('DashboardNavigator', () => {
  it('should render successfully', () => {
    const { root } = render(<DashboardNavigator />);
    expect(root).toBeTruthy();
  });
});
