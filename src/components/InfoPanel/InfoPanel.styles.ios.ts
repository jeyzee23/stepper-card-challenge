import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const styles = StyleSheet.create({
  container: {
    ...shadowStyles.card,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 30,
    fontWeight: '700',
  },
  description: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
  },
  highlightCard: {
    backgroundColor: colors.accentSoft,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    padding: spacing.lg,
  },
  highlightValue: {
    color: colors.accentStrong,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },
  bulletList: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  bulletRow: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  bulletRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  bulletText: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
