import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  spacing,
  typography,
} from '@/design-system';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  step: {
    alignItems: 'center',
    flex: 1,
    gap: spacing.xs,
  },
  circle: {
    alignItems: 'center',
    backgroundColor: colors.fill,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  currentCircle: {
    backgroundColor: colors.brand,
    borderColor: colors.brand,
    borderWidth: 1,
  },
  completedCircle: {
    backgroundColor: colors.brand,
  },
  lockedCircle: {
    backgroundColor: colors.surfaceMuted,
  },
  circleText: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '800',
  },
  activeCircleText: {
    color: colors.surfaceElevated,
  },
  label: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  currentLabel: {
    color: colors.brandDeep,
  },
  lockedLabel: {
    color: colors.textMuted,
  },
  connector: {
    alignSelf: 'flex-start',
    backgroundColor: colors.line,
    flex: 0.25,
    height: Math.max(hairlineWidth, 1),
    marginTop: 16,
  },
  activeConnector: {
    backgroundColor: colors.brand,
  },
});
