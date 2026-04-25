import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export const cardDetailsStyles = StyleSheet.create({
  detailLabel: {
    color: colors.textMuted,
    flex: 1,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  detailRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  detailValue: {
    color: colors.ink,
    flexShrink: 1,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'right',
  },
  detailsCard: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
});
