import React from 'react';
import { render } from '@testing-library/react-native';

import PromotionCardWidget from './PromotionCardWidget';

describe('PromotionCardWidget', () => {
  it('should render successfully', () => {
    const { root } = render(<PromotionCardWidget />);
    expect(root).toBeTruthy();
  });
});
