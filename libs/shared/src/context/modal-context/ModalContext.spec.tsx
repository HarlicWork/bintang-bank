import { render } from '@testing-library/react-native';

import { View } from 'react-native';
import ModalContext from './ModalContext';

describe('ModalContext', () => {
  it('should render successfully', () => {
    const { root } = render(
      <ModalContext>
        <View />
      </ModalContext>
    );
    expect(root).toBeTruthy();
  });
});
