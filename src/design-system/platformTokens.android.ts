import type { ViewStyle } from 'react-native';

export const platformRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
} as const;

export const platformShadowStyles: Record<'card' | 'soft', ViewStyle> = {
  card: {
    elevation: 3,
    shadowColor: '#3A2417',
  },
  soft: {
    elevation: 2,
    shadowColor: '#3A2417',
  },
};
