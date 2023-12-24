import React from 'react';
import { render } from '@testing-library/react-native';

import CreateDisplayNamePage from './CreateDisplayNamePage';

describe('CreateDisplayNamePage', () => {
  it('should render successfully', () => {
    const { root } = render(<CreateDisplayNamePage />);
    expect(root).toBeTruthy();
  });
});
