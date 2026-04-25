import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const headerActionStyles = StyleSheet.create({
  actionDot: {
    backgroundColor: colors.danger,
    borderRadius: radius.pill,
    height: 8,
    position: 'absolute',
    right: 1,
    top: 1,
    width: 8,
  },
  actionIcon: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
  },
  actionPill: {
    alignItems: 'center',
    backgroundColor: colors.brandDark,
    borderRadius: radius.pill,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    width: 40,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  logoMark: {
    color: colors.brand,
    fontFamily: typography.titleFamily,
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 22,
  },
});
