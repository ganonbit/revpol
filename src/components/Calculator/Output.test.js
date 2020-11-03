import { render } from '@testing-library/react';

import Output from './Output';

describe('Output', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Output />);
    }).not.toThrow();
  });
});
