import { renderAsync, screen } from '@testing-library/react-native';
import React from 'react';

import i18n from '@/i18n';

import { ActivityTimeline } from './ActivityTimeline';

describe('ActivityTimeline', () => {
  it('renders translated history entries newest first', async () => {
    await i18n.changeLanguage('es');

    await renderAsync(
      <ActivityTimeline
        history={[
          {
            createdAt: '2026-04-23T20:30:00.000Z',
            source: 'system',
            status: 'disabled',
          },
          {
            createdAt: '2026-04-23T20:32:00.000Z',
            source: 'quick_action',
            status: 'enabled',
          },
        ]}
      />,
    );

    const statuses = screen.getAllByText(/Activa|Inhabilitada/);

    expect(screen.getByTestId('activity-timeline')).toBeOnTheScreen();
    expect(statuses[0].props.children).toBe('Activa');
    expect(statuses[1].props.children).toBe('Inhabilitada');
    expect(
      screen.getByText('Cambio realizado desde la acción principal contextual'),
    ).toBeOnTheScreen();
    expect(screen.getByText('Estado inicial del sistema')).toBeOnTheScreen();
  });
});
