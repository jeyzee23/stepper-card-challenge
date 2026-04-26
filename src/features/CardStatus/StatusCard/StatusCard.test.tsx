import {
  fireEventAsync,
  renderAsync,
  screen,
} from '@testing-library/react-native';
import React from 'react';

import {
  defaultCardAccountData,
  type CardStatus,
} from '@/features/CardStatus';
import i18n from '@/i18n';

import { StatusCard } from './StatusCard';

const expectedLabels: Record<CardStatus, string> = {
  disabled: 'Inhabilitada',
  enabled: 'Activa',
  paused: 'Pausada',
  resumed: 'Reanudada',
};

const expectedNextStatus: Record<CardStatus, CardStatus> = {
  disabled: 'enabled',
  enabled: 'paused',
  paused: 'resumed',
  resumed: 'disabled',
};

describe('StatusCard', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('es');
  });

  it.each(Object.entries(expectedLabels) as [CardStatus, string][])(
    'renders semantic UI for %s',
    async (status, label) => {
      await renderAsync(
        <StatusCard
          account={defaultCardAccountData}
          onStatusChange={() => {}}
          status={status}
        />,
      );

      expect(screen.getByTestId(`status-badge-${status}`)).toBeOnTheScreen();
      expect(screen.getByText(label)).toBeOnTheScreen();
      expect(screen.getAllByText('Growth Card')).toHaveLength(2);
      expect(screen.getByText('**** 4831')).toBeOnTheScreen();
    },
  );

  it.each(Object.keys(expectedNextStatus) as CardStatus[])(
    'dispatches the contextual next state from %s',
    async status => {
      const onStatusChange = jest.fn();

      await renderAsync(
        <StatusCard
          account={defaultCardAccountData}
          onStatusChange={onStatusChange}
          status={status}
        />,
      );

      await fireEventAsync.press(screen.getByTestId('status-primary-action'));

      expect(onStatusChange).toHaveBeenCalledWith(
        expectedNextStatus[status],
        'quick_action',
      );
    },
  );
});
