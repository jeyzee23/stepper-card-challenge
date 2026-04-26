import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const statusBadgeStyles = StyleSheet.create({
  statusBadge: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  statusBadgeIcon: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 18,
    justifyContent: 'center',
    width: 18,
  },
  statusBadgeIconLabel: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 14,
  },
  statusLabel: {
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '700',
  },
});
