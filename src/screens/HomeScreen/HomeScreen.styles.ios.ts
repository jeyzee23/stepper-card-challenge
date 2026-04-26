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
    gap: spacing.lg,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: spacing.lg,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionEyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  sectionMeta: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '500',
  },
  stepperCard: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    marginTop: -58,
    padding: spacing.lg,
  },
  stepperHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
