import { render } from '@testing-library/react';

import Evaluator from './Evaluator';

describe('Evaluator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Evaluator />);
    }).not.toThrow();
  });
});
