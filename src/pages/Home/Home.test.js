import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Home />);
    }).not.toThrow();
  });
});
