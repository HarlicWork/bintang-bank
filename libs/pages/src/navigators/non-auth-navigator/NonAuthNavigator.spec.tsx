import React from 'react';
import { render } from '@testing-library/react-native';

import NonAuthNavigator from './NonAuthNavigator';

describe('NonAuthNavigator', () => {
  it('should render successfully', () => {
    const { root } = render(<NonAuthNavigator />);
    expect(root).toBeTruthy();
  });
});
