import { renderAsync, screen } from '@testing-library/react-native';
import React from 'react';

import { AppRoot } from './AppRoot';

describe('AppRoot', () => {
  it('mounts providers and renders the home screen', async () => {
    await renderAsync(<AppRoot />);

    expect(screen.getByTestId('home-screen')).toBeOnTheScreen();
  });
});
