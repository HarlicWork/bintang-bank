import React from 'react';
import { render } from '@testing-library/react-native';

import ConnectionErrorPage from './ConnectionErrorPage';

describe('ConnectionErrorPage', () => {
  it('should render successfully', () => {
    const { root } = render(<ConnectionErrorPage />);
    expect(root).toBeTruthy();
  });
});
