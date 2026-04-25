import { StyleSheet } from 'react-native';

import {
  colors,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const styles = StyleSheet.create({
  animatedContent: {
    gap: spacing.md,
  },
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  scrollContent: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionEyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  sectionMeta: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  stepperCard: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.lg,
    gap: spacing.md,
    marginTop: -34,
    padding: spacing.md,
  },
  stepperHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
