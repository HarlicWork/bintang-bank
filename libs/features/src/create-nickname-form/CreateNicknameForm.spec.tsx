import React from 'react';
import { render } from '@testing-library/react-native';

import CreateNicknameForm from './CreateNicknameForm';

describe('CreateNicknameForm', () => {
  it('should render successfully', () => {
    const { root } = render(<CreateNicknameForm />);
    expect(root).toBeTruthy();
  });
});
