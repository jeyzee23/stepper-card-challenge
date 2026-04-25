import {
  fireEventAsync,
  renderAsync,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import { ActionSheetIOS } from 'react-native';

import i18n from '@/i18n';

import { StatusCardStateControls } from './StatusCardStateControls.ios';

describe('StatusCardStateControls.ios', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('shows native options and respects cancel', async () => {
    await i18n.changeLanguage('es');
    const onStatusChange = jest.fn();
    const showActionSheet = jest
      .spyOn(ActionSheetIOS, 'showActionSheetWithOptions')
      .mockImplementation((options, callback) => {
        callback(options.cancelButtonIndex ?? 0);
      });

    await renderAsync(
      <StatusCardStateControls
        accentColor="#FF6500"
        onStatusChange={onStatusChange}
        status="disabled"
      />,
    );

    await fireEventAsync.press(screen.getByText('Cambiar estado'));

    expect(showActionSheet).toHaveBeenCalledWith(
      expect.objectContaining({
        cancelButtonIndex: 4,
        options: ['Inhabilitada', 'Activa', 'Pausada', 'Reanudada', 'Cancelar'],
        title: 'Elegí un estado para la card',
      }),
      expect.any(Function),
    );
    expect(onStatusChange).not.toHaveBeenCalled();
  });

  it('dispatches a valid manual selection', async () => {
    await i18n.changeLanguage('es');
    const onStatusChange = jest.fn();
    jest
      .spyOn(ActionSheetIOS, 'showActionSheetWithOptions')
      .mockImplementation((_options, callback) => {
        callback(2);
      });

    await renderAsync(
      <StatusCardStateControls
        accentColor="#FF6500"
        onStatusChange={onStatusChange}
        status="disabled"
      />,
    );

    await fireEventAsync.press(screen.getByText('Cambiar estado'));

    expect(onStatusChange).toHaveBeenCalledWith('paused', 'manual');
  });
});
