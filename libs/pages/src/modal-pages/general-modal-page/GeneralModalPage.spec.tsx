import React from 'react';
import { render } from '@testing-library/react-native';

import GeneralModalPage from './GeneralModalPage';

describe('GeneralModalPage', () => {
  it('should render successfully', () => {
    const { root } = render(<GeneralModalPage />);
    expect(root).toBeTruthy();
  });
});
