import { Platform } from 'react-native';

import { styles as androidStyles } from './HomeScreen.styles.android';
import { styles as iosStyles } from './HomeScreen.styles.ios';

export const styles = Platform.OS === 'android' ? androidStyles : iosStyles;
