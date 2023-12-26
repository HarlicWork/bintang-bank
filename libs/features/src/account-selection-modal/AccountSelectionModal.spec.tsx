import React from 'react';
import { render } from '@testing-library/react-native';

import AccountSelectionModal from './AccountSelectionModal';

describe('AccountSelectionModal', () => {
  it('should render successfully', () => {
    const { root } = render(<AccountSelectionModal />);
    expect(root).toBeTruthy();
  });
});
