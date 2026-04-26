import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import i18n from '@/i18n';

import { ErrorBoundary } from './ErrorBoundary';

function BrokenChild(): React.ReactNode {
  throw new Error('Stepper exploded');
}

describe('ErrorBoundary', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(async () => {
    await i18n.changeLanguage('es');
    consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders children when no error is thrown', () => {
    render(
      <ErrorBoundary>
        <Text>Stepper listo</Text>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Stepper listo')).toBeOnTheScreen();
  });

  it('renders a fallback when a child throws', () => {
    render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('app-error-boundary')).toBeOnTheScreen();
    expect(screen.getByText('No pudimos cargar el flujo')).toBeOnTheScreen();
    expect(screen.getByText('Reintentar')).toBeOnTheScreen();
  });

  it('allows retrying after the fallback is shown', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary>
        <Text>Flujo recuperado</Text>
      </ErrorBoundary>,
    );

    fireEvent.press(screen.getByTestId('app-error-retry'));

    expect(screen.getByText('Flujo recuperado')).toBeOnTheScreen();
  });

  it('renders localized fallback copy for English', async () => {
    await i18n.changeLanguage('en');

    render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText('We could not load the flow')).toBeOnTheScreen();
    expect(screen.getByText('Retry')).toBeOnTheScreen();
  });
});
