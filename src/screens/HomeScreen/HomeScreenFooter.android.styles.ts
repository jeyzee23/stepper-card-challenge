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
    borderRadius: radius.md,
    justifyContent: 'center',
    minHeight: 48,
    minWidth: 104,
    overflow: 'hidden',
    paddingHorizontal: spacing.lg,
  },
  androidBackButtonLabel: {
    color: colors.brandDeep,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  androidPrimaryButton: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderRadius: radius.md,
    elevation: 3,
    flex: 1,
    justifyContent: 'center',
    minHeight: 52,
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
    gap: spacing.md,
    paddingBottom: spacing.lg,
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
