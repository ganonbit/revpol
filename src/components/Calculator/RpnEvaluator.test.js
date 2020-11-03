import { render } from '@testing-library/react';

import RpnEvaluator from './RpnEvaluator';

describe('RpnEvaluator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RpnEvaluator />);
    }).not.toThrow();
  });
});
