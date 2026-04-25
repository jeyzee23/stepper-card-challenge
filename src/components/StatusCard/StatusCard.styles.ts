import { StyleSheet } from 'react-native';

import {
  colors,
  radius,
  shadowStyles,
  spacing,
  typography,
} from '@/design-system';

import type { CardStatus, StatusTheme } from './StatusCard.types';

export const statusTheme: Record<CardStatus, StatusTheme> = {
  disabled: {
    accent: colors.danger,
    background: colors.dangerSoft,
    badgeBackground: colors.dangerSoft,
    icon: '!',
    toneLabel: 'blocked',
  },
  enabled: {
    accent: colors.success,
    background: colors.successSoft,
    badgeBackground: colors.successSoft,
    icon: '✓',
    toneLabel: 'active',
  },
  paused: {
    accent: colors.warning,
    background: colors.warningSoft,
    badgeBackground: colors.warningSoft,
    icon: '||',
    toneLabel: 'paused',
  },
  resumed: {
    accent: colors.info,
    background: colors.infoSoft,
    badgeBackground: colors.infoSoft,
    icon: '>',
    toneLabel: 'resumed',
  },
};

export const styles = StyleSheet.create({
  card: {
    ...shadowStyles.card,
    borderCurve: 'continuous',
    borderLeftWidth: 6,
    borderRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  cardSubtitle: {
    color: colors.textMuted,
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    lineHeight: 22,
  },
  eyebrow: {
    color: colors.textSubtle,
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  planName: {
    color: colors.ink,
    fontFamily: typography.titleFamily,
    fontSize: 28,
    fontWeight: '700',
  },
  shell: {
    gap: spacing.lg,
  },
  titleBlock: {
    flex: 1,
    gap: spacing.xs,
    minWidth: 220,
  },
  topRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
});
