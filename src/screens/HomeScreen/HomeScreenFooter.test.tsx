import {
  fireEventAsync,
  renderAsync,
  screen,
} from '@testing-library/react-native';
import React from 'react';

import { HomeScreenFooter as AndroidHomeScreenFooter } from './HomeScreenFooter.android';

describe('HomeScreenFooter.android', () => {
  it('renders Material actions and blocks disabled back navigation', async () => {
    const onBack = jest.fn();
    const onNext = jest.fn();

    await renderAsync(
      <AndroidHomeScreenFooter
        backLabel="Volver"
        isFirstStep
        nextLabel="Continuar"
        onBack={onBack}
        onNext={onNext}
      />,
    );

    await fireEventAsync.press(screen.getByText('Volver'));
    await fireEventAsync.press(screen.getByText('Continuar'));

    expect(onBack).not.toHaveBeenCalled();
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('allows back navigation after the first step', async () => {
    const onBack = jest.fn();

    await renderAsync(
      <AndroidHomeScreenFooter
        backLabel="Volver"
        isFirstStep={false}
        nextLabel="Continuar"
        onBack={onBack}
        onNext={() => {}}
      />,
    );

    await fireEventAsync.press(screen.getByText('Volver'));

    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
