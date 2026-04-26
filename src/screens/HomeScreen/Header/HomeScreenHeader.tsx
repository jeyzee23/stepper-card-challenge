import { Platform } from 'react-native';

import { HomeScreenHeader as AndroidHomeScreenHeader } from './HomeScreenHeader.android';
import { HomeScreenHeader as IOSHomeScreenHeader } from './HomeScreenHeader.ios';

export const HomeScreenHeader =
  Platform.OS === 'android' ? AndroidHomeScreenHeader : IOSHomeScreenHeader;
