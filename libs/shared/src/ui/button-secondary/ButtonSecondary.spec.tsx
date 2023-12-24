import React from 'react';
import { render } from '@testing-library/react-native';

import ButtonSecondary from './ButtonSecondary';

describe('ButtonSecondary', () => {
  it('should render successfully', () => {
    const { root } = render(<ButtonSecondary />);
    expect(root).toBeTruthy();
  });
});
