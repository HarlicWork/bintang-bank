import { render } from '@testing-library/react-native';

import CounterInputButton from './CounterInputButton';

describe('CounterInputButton', () => {
  it('should render successfully', () => {
    const { root } = render(<CounterInputButton />);
    expect(root).toBeTruthy();
  });
});
