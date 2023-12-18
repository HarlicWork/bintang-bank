import React from 'react';
import { render } from '@testing-library/react-native';

import CommonHeaderWidget from './CommonHeaderWidget';

describe('CommonHeaderWidget', () => {
  it('should render successfully', () => {
    const { root } = render(<CommonHeaderWidget headerTitle="commonHeader" />);
    expect(root).toBeTruthy();
  });
});
