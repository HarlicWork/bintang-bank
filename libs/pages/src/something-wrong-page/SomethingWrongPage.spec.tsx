import React from 'react';
import { render } from '@testing-library/react-native';

import SomethingWrongPage from './SomethingWrongPage';

describe('SomethingWrongPage', () => {
  it('should render successfully', () => {
    const { root } = render(<SomethingWrongPage />);
    expect(root).toBeTruthy();
  });
});
