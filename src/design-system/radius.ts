import { Platform } from 'react-native';

export const radius = {
  sm: Platform.OS === 'android' ? 8 : 10,
  md: Platform.OS === 'android' ? 12 : 16,
  lg: Platform.OS === 'android' ? 16 : 20,
  xl: Platform.OS === 'android' ? 20 : 28,
  pill: 999,
} as const;
