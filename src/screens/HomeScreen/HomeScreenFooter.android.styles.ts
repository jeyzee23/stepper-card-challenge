import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export const footerStyles = StyleSheet.create({
  androidBackButton: {
    alignItems: 'center',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 76,
    overflow: 'hidden',
    paddingHorizontal: spacing.sm,
  },
  androidBackButtonLabel: {
    color: colors.brandDeep,
    fontFamily: typography.bodyFamily,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  androidPrimaryButton: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderRadius: radius.md,
    elevation: 2,
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 176,
    overflow: 'hidden',
    paddingHorizontal: spacing.xl,
  },
  backButtonDisabled: {
    opacity: 0.45,
  },
  backButtonPressed: {
    backgroundColor: colors.fill,
  },
  backTextDisabled: {
    color: colors.textMuted,
  },
  footerAndroid: {
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
    borderTopColor: colors.line,
    borderTopWidth: hairlineWidth,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'space-between',
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  primaryNavButtonLabel: {
    color: colors.surfaceElevated,
    fontFamily: typography.bodyFamily,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryNavButtonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
});
