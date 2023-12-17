import React from 'react';
import { render } from '@testing-library/react-native';

import StartupPage from './StartupPage';

describe('StartupPage', () => {
  it('should render successfully', () => {
    const { root } = render(<StartupPage />);
    expect(root).toBeTruthy();
  });
});
