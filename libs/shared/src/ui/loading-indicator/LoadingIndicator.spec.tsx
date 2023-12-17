import React from 'react';
import { render } from '@testing-library/react-native';

import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator', () => {
  it('should render successfully', () => {
    const { root } = render(
      <LoadingIndicator size={'large'} color={'white'} />
    );
    expect(root).toBeTruthy();
  });
});
