import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import '@/i18n';

import { StatusCard } from './StatusCard';

describe('StatusCard', () => {
  it('renders the final card shell', () => {
    let tree: ReactTestRenderer.ReactTestRenderer | undefined;

    ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(
        <StatusCard onStatusChange={() => {}} status="disabled" />,
      );
    });

    expect(tree?.root.findByProps({ testID: 'status-card' })).toBeDefined();
  });
});
