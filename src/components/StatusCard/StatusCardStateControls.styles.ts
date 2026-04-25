import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export const statusCardStateControlsStyles = StyleSheet.create({
  androidSheet: {
    backgroundColor: colors.surfaceElevated,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    elevation: 6,
    gap: spacing.lg,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  androidSheetCheck: {
    color: colors.brand,
    fontFamily: typography.bodyFamily,
    fontSize: 20,
    fontWeight: '900',
    width: 24,
  },
  androidSheetHandle: {
    alignSelf: 'center',
    backgroundColor: colors.line,
    borderRadius: radius.pill,
    height: 4,
    width: 42,
  },
  androidSheetIcon: {
    alignItems: 'center',
    borderRadius: radius.md,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  androidSheetIconLabel: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
    fontWeight: '900',
  },
  androidSheetOption: {
    alignItems: 'center',
    borderColor: colors.line,
    borderRadius: radius.md,
    borderWidth: hairlineWidth,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 64,
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  androidSheetOptionActive: {
    backgroundColor: colors.brandSoft,
    borderColor: colors.brand,
    borderWidth: 1,
  },
  androidSheetOptionDescription: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    lineHeight: 18,
  },
  androidSheetOptionTitle: {
    color: colors.ink,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '800',
  },
  androidSheetOverlay: {
    backgroundColor: colors.scrim,
    flex: 1,
    justifyContent: 'flex-end',
  },
  androidSheetTextBlock: {
    flex: 1,
    gap: 2,
  },
  androidSheetTitle: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0,
  },
});
