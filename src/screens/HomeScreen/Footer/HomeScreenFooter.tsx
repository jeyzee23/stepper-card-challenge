import { Platform } from 'react-native';

import { HomeScreenFooter as AndroidHomeScreenFooter } from './HomeScreenFooter.android';
import { HomeScreenFooter as IOSHomeScreenFooter } from './HomeScreenFooter.ios';

export const HomeScreenFooter =
  Platform.OS === 'android' ? AndroidHomeScreenFooter : IOSHomeScreenFooter;
