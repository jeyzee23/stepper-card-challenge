import { StyleSheet } from 'react-native';

import { colors, radius, spacing, typography } from '@/design-system';

export const segmentWidth = 46;

export const styles = StyleSheet.create({
  activeLabel: {
    color: colors.ink,
    opacity: 1,
  },
  container: {
    alignSelf: 'flex-start',
    backgroundColor: colors.brandDark,
    borderRadius: radius.pill,
    flexDirection: 'row',
    minHeight: 48,
    padding: spacing.xs,
    position: 'relative',
  },
  label: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '800',
    opacity: 0.86,
  },
  segment: {
    alignItems: 'center',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 40,
    width: segmentWidth,
  },
  thumb: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.pill,
    bottom: spacing.xs,
    elevation: 2,
    left: spacing.xs,
    position: 'absolute',
    top: spacing.xs,
    width: segmentWidth,
  },
});
