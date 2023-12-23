/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render } from '@testing-library/react-native';

import DashboardTabBar from './DashboardTabBar';

describe('DashboardTabBar', () => {
  it('should render successfully', () => {
    const { root } = render(
      <DashboardTabBar
        state={{} as any}
        descriptors={{} as any}
        navigation={{} as any}
      />
    );
    expect(root).toBeTruthy();
  });
});
