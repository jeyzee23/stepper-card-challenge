import { Platform } from 'react-native';

import { styles as androidStyles } from './InfoPanel.styles.android';
import { styles as iosStyles } from './InfoPanel.styles.ios';

export const styles = Platform.OS === 'android' ? androidStyles : iosStyles;
