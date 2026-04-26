import { StyleSheet } from 'react-native';

import { colors, radius, shadowStyles, spacing } from '@/design-system';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: spacing.xxl,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    gap: spacing.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    padding: spacing.xxl,
    ...shadowStyles.card,
  },
  eyebrow: {
    color: colors.brandDeep,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 32,
  },
  description: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 23,
  },
  retryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    backgroundColor: colors.brand,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  retryButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '800',
  },
});
