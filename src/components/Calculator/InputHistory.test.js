import { render } from '@testing-library/react';

import InputHistory from './InputHistory';

describe('InputHistory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputHistory />);
    }).not.toThrow();
  });
});
