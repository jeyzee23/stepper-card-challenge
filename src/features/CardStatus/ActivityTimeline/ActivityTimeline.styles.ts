import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
} from '@/design-system';

export const styles = StyleSheet.create({
  container: {
    ...shadowStyles.soft,
    backgroundColor: colors.surfaceElevated,
    borderCurve: 'continuous',
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  header: {
    gap: spacing.xs,
  },
  title: {
    color: colors.textSubtle,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  rowBorder: {
    borderBottomColor: colors.line,
    borderBottomWidth: hairlineWidth,
  },
  dot: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 24,
    justifyContent: 'center',
    marginTop: 1,
    width: 24,
  },
  dotLabel: {
    color: colors.surface,
    fontSize: 11,
    fontWeight: '900',
    lineHeight: 14,
  },
  eventCard: {
    flex: 1,
    gap: spacing.xs,
  },
  eventHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  eventStatus: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '600',
  },
  eventTime: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  eventSource: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
});
