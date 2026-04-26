import { Platform } from 'react-native';

import { StatusCardStateControls as AndroidStatusCardStateControls } from './StatusCardStateControls.android';
import { StatusCardStateControls as IOSStatusCardStateControls } from './StatusCardStateControls.ios';

export const StatusCardStateControls =
  Platform.OS === 'android'
    ? AndroidStatusCardStateControls
    : IOSStatusCardStateControls;
