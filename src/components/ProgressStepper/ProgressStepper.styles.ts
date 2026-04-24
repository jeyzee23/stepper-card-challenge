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
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  currentCircle: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
    borderWidth: hairlineWidth,
  },
  completedCircle: {
    backgroundColor: colors.accent,
  },
  lockedCircle: {
    backgroundColor: colors.surfaceMuted,
  },
  circleText: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
  },
  activeCircleText: {
    color: colors.surfaceElevated,
  },
  label: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  currentLabel: {
    color: colors.ink,
  },
  lockedLabel: {
    color: colors.textMuted,
  },
  connector: {
    alignSelf: 'flex-start',
    backgroundColor: colors.line,
    flex: 0.25,
    height: hairlineWidth,
    marginTop: 13,
  },
  activeConnector: {
    backgroundColor: colors.accent,
  },
});
