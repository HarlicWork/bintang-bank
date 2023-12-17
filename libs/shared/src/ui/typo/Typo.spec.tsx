import React from 'react';
import { render } from '@testing-library/react-native';

import Typo from './Typo';

describe('Typo', () => {
  it('should render successfully', () => {
    const { root } = render(<Typo />);
    expect(root).toBeTruthy();
  });
});
