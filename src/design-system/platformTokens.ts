import type { ViewStyle } from 'react-native';

export const platformRadius = {
  sm: 10,
  md: 16,
  lg: 20,
  xl: 28,
} as const;

export const platformShadowStyles: Record<'card' | 'soft', ViewStyle> = {
  card: {
    shadowColor: '#3A2417',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },
  soft: {
    shadowColor: '#3A2417',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
};
