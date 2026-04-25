import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export const capabilitiesListStyles = StyleSheet.create({
  capabilitiesCard: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
    paddingTop: spacing.md,
  },
  featureDot: {
    backgroundColor: colors.brand,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 7,
    width: 7,
  },
  featureLabel: {
    color: colors.text,
    fontFamily: typography.bodyFamily,
    fontSize: 15,
  },
  featureRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  featureRowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  sectionLabel: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
    textTransform: 'uppercase',
  },
});
