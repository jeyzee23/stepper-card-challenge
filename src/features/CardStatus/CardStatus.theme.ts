import { colors } from '@/design-system';

import type { CardStatus, StatusTheme } from './CardStatus.types';

export const cardStatusTheme: Record<CardStatus, StatusTheme> = {
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
