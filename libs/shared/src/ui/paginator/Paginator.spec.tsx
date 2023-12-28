import React from 'react';
import { render } from '@testing-library/react-native';

import Paginator from './Paginator';

describe('Paginator', () => {
  it('should render successfully', () => {
    const { root } = render(<Paginator />);
    expect(root).toBeTruthy();
  });
});
