import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

export const segmentWidth = 48;

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: colors.fill,
    borderColor: colors.line,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    borderWidth: hairlineWidth,
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
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
  },
  activeLabel: {
    color: colors.ink,
  },
});
