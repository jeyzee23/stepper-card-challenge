import {
  fireEventAsync,
  renderAsync,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import { Pressable, Text } from 'react-native';

import { StepperProvider, useStepper } from '@/context/StepperContext';
import i18n from '@/i18n';

import { ProgressStepper } from './ProgressStepper';

function StepperHarness() {
  const { goNext } = useStepper();

  return (
    <>
      <ProgressStepper />
      <Pressable onPress={goNext} testID="advance-step">
        <Text>Advance</Text>
      </Pressable>
    </>
  );
}

async function renderProgressStepper() {
  await i18n.changeLanguage('es');

  return renderAsync(
    <StepperProvider>
      <StepperHarness />
    </StepperProvider>,
  );
}

describe('ProgressStepper', () => {
  it('marks current, completed and locked steps through navigation', async () => {
    await renderProgressStepper();

    expect(
      screen.getByTestId('stepper-step-identity').props.accessibilityState,
    ).toMatchObject({ selected: true, disabled: false });
    expect(
      screen.getByTestId('stepper-step-controls').props.accessibilityState,
    ).toMatchObject({ selected: false, disabled: true });

    await fireEventAsync.press(screen.getByTestId('advance-step'));

    expect(
      screen.getByTestId('stepper-step-identity').props.accessibilityState,
    ).toMatchObject({ selected: false, disabled: false });
    expect(
      screen.getByTestId('stepper-step-security').props.accessibilityState,
    ).toMatchObject({ selected: true, disabled: false });
  });

  it('allows returning only to visited steps', async () => {
    await renderProgressStepper();

    await fireEventAsync.press(screen.getByTestId('advance-step'));
    await fireEventAsync.press(screen.getByTestId('stepper-step-identity'));

    expect(
      screen.getByTestId('stepper-step-identity').props.accessibilityState,
    ).toMatchObject({ selected: true, disabled: false });
    expect(
      screen.getByTestId('stepper-step-controls').props.accessibilityState,
    ).toMatchObject({ selected: false, disabled: true });
  });
});
