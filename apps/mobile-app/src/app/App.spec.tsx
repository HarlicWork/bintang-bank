import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { root } = render(<App />);
    expect(root).toBeTruthy();
  });
});
