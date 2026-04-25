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

    expect(screen.getByText('Validar a la persona titular')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByText('Continuar'));
    expect(
      screen.getByText('Explicar la capa de protección'),
    ).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByText('Volver'));
    expect(screen.getByText('Validar a la persona titular')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByText('Continuar'));
    await fireEventAsync.press(screen.getByText('Continuar'));
    expect(
      screen.getByText('Previsualizar reglas operativas'),
    ).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByText('Ver card final'));
    expect(screen.getByText('Inspeccionar la card final')).toBeOnTheScreen();
    expect(screen.getByTestId('status-card')).toBeOnTheScreen();
    expect(screen.getByTestId('activity-timeline')).toBeOnTheScreen();

    await fireEventAsync.press(screen.getByText('Reiniciar flujo'));
    expect(screen.getByText('Validar a la persona titular')).toBeOnTheScreen();
  });

  it('does not allow jumping to an unvisited future step', async () => {
    await renderHomeScreen();

    await fireEventAsync.press(screen.getByTestId('stepper-step-controls'));

    expect(screen.getByText('Validar a la persona titular')).toBeOnTheScreen();
    expect(screen.queryByText('Previsualizar reglas operativas')).toBeNull();
  });

  it('switches copy between Spanish and English at runtime', async () => {
    await renderHomeScreen();

    await fireEventAsync.press(screen.getByText('EN'));

    expect(screen.getByText('Validate the card holder')).toBeOnTheScreen();
    expect(screen.getByText('Continue')).toBeOnTheScreen();
  });
});
