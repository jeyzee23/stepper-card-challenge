import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { AppErrorBoundary } from './AppErrorBoundary';

function BrokenChild(): React.ReactNode {
  throw new Error('Stepper exploded');
}

describe('AppErrorBoundary', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders children when no error is thrown', () => {
    render(
      <AppErrorBoundary>
        <Text>Stepper listo</Text>
      </AppErrorBoundary>,
    );

    expect(screen.getByText('Stepper listo')).toBeOnTheScreen();
  });

  it('renders a fallback when a child throws', () => {
    render(
      <AppErrorBoundary>
        <BrokenChild />
      </AppErrorBoundary>,
    );

    expect(screen.getByTestId('app-error-boundary')).toBeOnTheScreen();
    expect(screen.getByText('No pudimos cargar el flujo')).toBeOnTheScreen();
    expect(screen.getByText('Reintentar')).toBeOnTheScreen();
  });

  it('allows retrying after the fallback is shown', () => {
    const { rerender } = render(
      <AppErrorBoundary>
        <BrokenChild />
      </AppErrorBoundary>,
    );

    rerender(
      <AppErrorBoundary>
        <Text>Flujo recuperado</Text>
      </AppErrorBoundary>,
    );

    fireEvent.press(screen.getByTestId('app-error-retry'));

    expect(screen.getByText('Flujo recuperado')).toBeOnTheScreen();
  });
});
