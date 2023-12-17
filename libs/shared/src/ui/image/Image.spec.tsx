import React from 'react';
import { render } from '@testing-library/react-native';

import Image from './Image';
import assets from '@bintang-bank/assets';

describe('Image', () => {
  it('should render successfully', () => {
    const { root } = render(<Image source={assets.bankLogo} />);
    expect(root).toBeTruthy();
  });
});
