import React from 'react';
import { render } from '@testing-library/react-native';

import Card from './Card';
import { View } from 'react-native';

describe('Card', () => {
  it('should render successfully', () => {
    const { root } = render(
      <Card>
        <View />
      </Card>
    );
    expect(root).toBeTruthy();
  });
});
