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
    borderColor: colors.line,
    borderRadius: radius.md,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 50,
    width: 128,
    overflow: 'hidden',
    paddingHorizontal: spacing.lg,
  },
  androidBackButtonLabel: {
    color: colors.ink,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  androidPrimaryButton: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderColor: colors.brand,
    borderRadius: radius.md,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    minHeight: 50,
    overflow: 'hidden',
    paddingHorizontal: spacing.lg,
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
    gap: spacing.xl,
    justifyContent: 'space-between',
    minHeight: 96,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
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
