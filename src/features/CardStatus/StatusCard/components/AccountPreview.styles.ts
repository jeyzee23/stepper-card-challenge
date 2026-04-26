import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const accountPreviewStyles = StyleSheet.create({
  accountMeta: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  accountNumberBlock: {
    flex: 1,
    gap: 2,
  },
  accountPreview: {
    backgroundColor: colors.fill,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    gap: spacing.sm,
    padding: spacing.lg,
  },
  accountPreviewTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  maskedNumber: {
    color: colors.ink,
    fontFamily: typography.bodyFamily,
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  statusDescription: {
    color: colors.text,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    lineHeight: 22,
  },
  statusIconTile: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.md,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  statusIconTileLabel: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 17,
    fontWeight: '900',
  },
});
