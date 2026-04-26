import { renderAsync, screen } from '@testing-library/react-native';
import React from 'react';

import '@/i18n';

import { HomeScreenHeader as AndroidHomeScreenHeader } from './HomeScreenHeader.android';

describe('HomeScreenHeader.android', () => {
  it('renders the brand hero content', async () => {
    await renderAsync(
      <AndroidHomeScreenHeader
        badge="Card Controls · Estados"
        subtitle="Subtítulo de prueba"
        topInset={24}
        title="Card Controls"
      />,
    );

    expect(screen.getByText('Card Controls · Estados')).toBeOnTheScreen();
    expect(screen.getByText('Card Controls')).toBeOnTheScreen();
    expect(screen.getByText('Subtítulo de prueba')).toBeOnTheScreen();
  });
});
