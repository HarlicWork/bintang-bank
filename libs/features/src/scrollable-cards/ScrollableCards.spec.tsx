import React from 'react';
import { render } from '@testing-library/react-native';

import ScrollableCards from './ScrollableCards';

describe('ScrollableCards', () => {
  it('should render successfully', () => {
    const { root } = render(<ScrollableCards />);
    expect(root).toBeTruthy();
  });
});
