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
  bulletList: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  bulletRow: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  bulletRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  bulletText: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  container: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.lg,
    gap: spacing.md,
    padding: spacing.lg,
  },
  description: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  highlightCard: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  highlightValue: {
    color: colors.accentStrong,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  title: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 25,
    fontWeight: '800',
    lineHeight: 30,
  },
});
