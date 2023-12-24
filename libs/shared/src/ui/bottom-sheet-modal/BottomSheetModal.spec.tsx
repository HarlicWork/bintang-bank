import React from 'react';
import { render } from '@testing-library/react-native';

import { BottomSheetModal } from './BottomSheetModal';

describe('BottomSheet', () => {
  it('should render successfully', () => {
    const { root } = render(<BottomSheetModal />);
    expect(root).toBeTruthy();
  });
});
