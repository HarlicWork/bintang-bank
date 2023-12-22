import { render } from '@testing-library/react-native';

import LoginFormFeature from './LoginFormFeature';

describe('LoginFormFeature', () => {
  it('should render successfully', () => {
    const { root } = render(<LoginFormFeature />);
    expect(root).toBeTruthy();
  });
});
