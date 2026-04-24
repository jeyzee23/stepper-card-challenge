import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { AppRoot } from './AppRoot';

test('renders correctly', () => {
  let tree: ReactTestRenderer.ReactTestRenderer | undefined;

  ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<AppRoot />);
  });

  expect(tree).toBeDefined();
});
