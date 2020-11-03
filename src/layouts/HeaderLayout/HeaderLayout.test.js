import { render } from '@testing-library/react';

import HeaderLayout from './HeaderLayout';

describe('HeaderLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderLayout />);
    }).not.toThrow();
  });
});
