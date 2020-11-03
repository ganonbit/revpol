import { render } from '@testing-library/react';

import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Calculator />);
    }).not.toThrow();
  });
});
