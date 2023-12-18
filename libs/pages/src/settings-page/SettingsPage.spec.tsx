import React from 'react';
import { render } from '@testing-library/react-native';

import SettingsPage from './SettingsPage';

describe('SettingsPage', () => {
  it('should render successfully', () => {
    const { root } = render(<SettingsPage />);
    expect(root).toBeTruthy();
  });
});
