import {
  fireEventAsync,
  renderAsync,
  screen,
} from '@testing-library/react-native';
import React from 'react';

import { StepperProvider } from '@/context/StepperContext';
import i18n from '@/i18n';

import { HomeScreen } from './HomeScreen';

async function renderHomeScreen() {
  await i18n.changeLanguage('es');

  return renderAsync(
    <StepperProvider>
      <HomeScreen />
    </StepperProvider>,
  );
}

describe('HomeScreen', () => {
  it('walks forward, back, final card and reset through the full stepper flow', async () => {
    await renderHomeScreen();

    expect(screen.getByTestId('step-content-identity')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('home-footer-next'));
    expect(screen.getByTestId('step-content-security')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('home-footer-back'));
    expect(screen.getByTestId('step-content-identity')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('home-footer-next'));
    await fireEventAsync.press(screen.getByTestId('home-footer-next'));
    expect(screen.getByTestId('step-content-controls')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('home-footer-next'));
    expect(screen.getByTestId('step-content-status')).toBeOnTheScreen();
    expect(screen.getByTestId('status-card')).toBeOnTheScreen();
    expect(screen.getByTestId('activity-timeline')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByTestId('home-footer-next'));
    expect(screen.getByTestId('step-content-identity')).toBeOnTheScreen();
  });

  it('does not allow jumping to an unvisited future step', async () => {
    await renderHomeScreen();

    await fireEventAsync.press(screen.getByTestId('stepper-step-controls'));

    expect(screen.getByTestId('step-content-identity')).toBeOnTheScreen();
    expect(screen.queryByTestId('step-content-controls')).toBeNull();
  });

  it('switches copy between Spanish and English at runtime', async () => {
    await renderHomeScreen();

    await fireEventAsync.press(screen.getByText('EN'));

    expect(screen.getByText('Validate the card holder')).toBeOnTheScreen();
    expect(screen.getByText('Continue')).toBeOnTheScreen();
  });
});
