import React from 'react';
import { render } from '@testing-library/react-native';

import CommonHeaderPrimaryWidget from './CommonHeaderPrimaryWidget';

describe('CommonHeaderPrimaryWidget', () => {
  it('should render successfully', () => {
    const { root } = render(<CommonHeaderPrimaryWidget username="test" />);
    expect(root).toBeTruthy();
  });
});
