import {
  fireEventAsync,
  renderAsync,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';

import i18n from '@/i18n';

import { StatusCardStateControls } from './StatusCardStateControls.android';

describe('StatusCardStateControls.android', () => {
  it('opens the Material selector, selects a manual status and closes', async () => {
    await i18n.changeLanguage('es');
    const onStatusChange = jest.fn();

    await renderAsync(
      <StatusCardStateControls
        onStatusChange={onStatusChange}
        status="disabled"
      />,
    );

    await fireEventAsync.press(screen.getByText('Cambiar estado'));

    expect(screen.getByText('Elegí un estado para la card')).toBeOnTheScreen();
    expect(screen.getByTestId('status-option-enabled')).toBeOnTheScreen();
    expect(screen.getByTestId('status-option-paused')).toBeOnTheScreen();
    expect(screen.getByTestId('status-option-resumed')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('status-option-enabled'));

    expect(onStatusChange).toHaveBeenCalledWith('enabled', 'manual');
    await waitFor(() => {
      expect(screen.queryByText('Elegí un estado para la card')).toBeNull();
    });
  });
});
