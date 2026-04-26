import { StyleSheet } from 'react-native';

import {
  colors,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const segmentWidth = 48;

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(154, 70, 0, 0.32)',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    flexDirection: 'row',
    padding: spacing.xs,
    position: 'relative',
  },
  thumb: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    bottom: spacing.xs,
    left: spacing.xs,
    position: 'absolute',
    top: spacing.xs,
    width: segmentWidth,
  },
  segment: {
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 32,
    width: segmentWidth,
  },
  label: {
    color: colors.surface,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.82,
  },
  activeLabel: {
    color: colors.ink,
    opacity: 1,
  },
});
