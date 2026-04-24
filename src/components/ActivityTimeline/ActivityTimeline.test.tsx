import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import '@/i18n';

import { ActivityTimeline } from './ActivityTimeline';

describe('ActivityTimeline', () => {
  it('renders the activity container', async () => {
    let tree: ReactTestRenderer.ReactTestRenderer | undefined;

    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(
        <ActivityTimeline
          history={[
            {
              createdAt: '2026-04-23T20:30:00.000Z',
              source: 'system',
              status: 'disabled',
            },
          ]}
        />,
      );
    });

    expect(tree?.root.findByProps({ testID: 'activity-timeline' })).toBeDefined();
  });
});
