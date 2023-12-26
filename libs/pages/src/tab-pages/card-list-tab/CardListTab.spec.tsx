import React from 'react';
import { render } from '@testing-library/react-native';

import CardListTab from './CardListTab';

describe('CardListTab', () => {
  it('should render successfully', () => {
    const { root } = render(<CardListTab />);
    expect(root).toBeTruthy();
  });
});
