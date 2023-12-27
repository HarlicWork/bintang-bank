import React from 'react';
import { render } from '@testing-library/react-native';

import TotalAccountDetailWidget from './TotalAccountDetailWidget';

describe('TotalAccountDetailWidget', () => {
  it('should render successfully', () => {
    const { root } = render(<TotalAccountDetailWidget />);
    expect(root).toBeTruthy();
  });
});
