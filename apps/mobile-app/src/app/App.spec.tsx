import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom';

import { NavigationContainer } from '@react-navigation/native';

import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { root } = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
    expect(root).toBeTruthy();
  });
});
