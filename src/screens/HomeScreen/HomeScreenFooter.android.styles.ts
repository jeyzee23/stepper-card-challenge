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
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.brandDeep,
    borderWidth: hairlineWidth,
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 112,
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
  },
  androidBackIcon: {
    color: colors.brandDeep,
    fontFamily: typography.bodyFamily,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 20,
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
    borderRadius: radius.pill,
    elevation: 2,
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 184,
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
    elevation: 8,
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
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
