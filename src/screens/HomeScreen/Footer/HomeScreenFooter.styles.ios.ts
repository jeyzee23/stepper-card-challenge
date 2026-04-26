import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const footerStyles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.md,
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.md,
    width: 108,
  },
  backButtonDisabled: {
    opacity: 0.45,
  },
  backButtonLabel: {
    color: colors.brand,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '600',
  },
  backButtonPressed: {
    backgroundColor: colors.fill,
  },
  backChevron: {
    color: colors.brand,
    fontFamily: typography.bodyFamily,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: -2,
  },
  backTextDisabled: {
    color: colors.textMuted,
  },
  footer: {
    backgroundColor: colors.background,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  footerTray: {
    ...shadowStyles.soft,
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    borderWidth: hairlineWidth,
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.sm,
  },
  primaryNavButton: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    flex: 1,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: spacing.xl,
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
