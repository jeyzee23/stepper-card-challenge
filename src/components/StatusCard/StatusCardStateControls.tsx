import React from 'react';
import { Platform } from 'react-native';

import { StatusCardStateControls as AndroidStatusCardStateControls } from './StatusCardStateControls.android';
import { StatusCardStateControls as IOSStatusCardStateControls } from './StatusCardStateControls.ios';

import type { StatusCardStateControlsProps } from './StatusCard.types';

export function StatusCardStateControls(props: StatusCardStateControlsProps) {
  if (Platform.OS === 'ios') {
    return <IOSStatusCardStateControls {...props} />;
  }

  return <AndroidStatusCardStateControls {...props} />;
}
