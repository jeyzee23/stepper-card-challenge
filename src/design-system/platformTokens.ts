import { Platform } from 'react-native';

import {
  platformRadius as androidPlatformRadius,
  platformShadowStyles as androidPlatformShadowStyles,
} from './platformTokens.android';
import {
  platformRadius as iosPlatformRadius,
  platformShadowStyles as iosPlatformShadowStyles,
} from './platformTokens.ios';

export const platformRadius =
  Platform.OS === 'android' ? androidPlatformRadius : iosPlatformRadius;
export const platformShadowStyles =
  Platform.OS === 'android'
    ? androidPlatformShadowStyles
    : iosPlatformShadowStyles;
