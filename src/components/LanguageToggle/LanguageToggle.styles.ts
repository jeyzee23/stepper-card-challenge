import { Platform } from 'react-native';

import {
  segmentWidth as androidSegmentWidth,
  styles as androidStyles,
} from './LanguageToggle.styles.android';
import {
  segmentWidth as iosSegmentWidth,
  styles as iosStyles,
} from './LanguageToggle.styles.ios';

export const segmentWidth =
  Platform.OS === 'android' ? androidSegmentWidth : iosSegmentWidth;
export const styles = Platform.OS === 'android' ? androidStyles : iosStyles;
