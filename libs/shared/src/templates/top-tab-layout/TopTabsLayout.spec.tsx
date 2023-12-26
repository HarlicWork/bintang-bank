import React from 'react';
import { render } from '@testing-library/react-native';

import TopTabsLayout from './TopTabsLayout';

describe('TopTabsLayout', () => {
  it('should render successfully', () => {
    const { root } = render(<TopTabsLayout />);
    expect(root).toBeTruthy();
  });
});
