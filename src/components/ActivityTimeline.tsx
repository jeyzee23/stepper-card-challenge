import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import {
  shadowStyles,
  colors,
  hairlineWidth,
  radius,
  spacing,
} from '@/theme/tokens';
import type { CardStatusHistoryEntry } from '@/types';
import { formatDateTime } from '@/utils/formatters';

interface ActivityTimelineProps {
  history: CardStatusHistoryEntry[];
}

export function ActivityTimeline({ history }: ActivityTimelineProps) {
  const { i18n, t } = useTranslation();
  const entries = [...history].reverse();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('timeline.title')}</Text>
        <Text style={styles.subtitle}>{t('timeline.subtitle')}</Text>
      </View>

      <View style={styles.list}>
        {entries.map((entry, index) => (
          <View
            key={`${entry.createdAt}-${entry.status}-${entry.source}`}
            style={[
              styles.row,
              index < entries.length - 1 ? styles.rowBorder : null,
            ]}
          >
            <View style={styles.dot} />

            <View style={styles.eventCard}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventStatus}>
                  {t(`statusCard.statuses.${entry.status}.label`)}
                </Text>
                <Text style={styles.eventTime}>
                  {formatDateTime(entry.createdAt, i18n.language)}
                </Text>
              </View>

              <Text style={styles.eventSource}>
                {t(`timeline.sources.${entry.source}`)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.accent,
    borderCurve: 'continuous',
    borderRadius: radius.pill,
    height: 8,
    marginTop: 7,
    width: 8,
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
