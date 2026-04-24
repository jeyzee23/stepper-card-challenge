import { StyleSheet } from 'react-native';

import {
  colors,
  hairlineWidth,
  radius,
  shadowStyles,
  spacing,
  typography,
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
  title: {
    color: colors.textSubtle,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
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
  index: {
    color: colors.accent,
    fontFamily: typography.bodyFamily,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    width: 24,
  },
  text: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
  },
});
