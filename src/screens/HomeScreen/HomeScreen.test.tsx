import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import '@/i18n';
import { StepperProvider } from '@/context/StepperContext';

import { HomeScreen } from './HomeScreen';

describe('HomeScreen', () => {
  it('renders the stepper flow shell', () => {
    let tree: ReactTestRenderer.ReactTestRenderer | undefined;

    ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(
        <StepperProvider>
          <HomeScreen />
        </StepperProvider>,
      );
    });

    expect(tree?.root.findByProps({ testID: 'home-screen' })).toBeDefined();
  });
});
