import React from 'react';
import { render } from '@testing-library/react-native';

import ProfileMenuModal from './ProfileMenuModal';

describe('ProfileMenuModal', () => {
  it('should render successfully', () => {
    const { root } = render(<ProfileMenuModal />);
    expect(root).toBeTruthy();
  });
});
