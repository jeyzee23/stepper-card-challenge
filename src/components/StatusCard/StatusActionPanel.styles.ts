import { StyleSheet } from 'react-native';

import {
  colors,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const statusActionPanelStyles = StyleSheet.create({
  actionHint: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    lineHeight: 19,
  },
  actionPanel: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.md,
    padding: spacing.lg,
  },
  actionPanelTitle: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
