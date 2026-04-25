import { platformShadowStyles } from './platformTokens';

import type { ViewStyle } from 'react-native';

export const shadowStyles: Record<'card' | 'soft', ViewStyle> = {
  card: platformShadowStyles.card,
  soft: platformShadowStyles.soft,
};
