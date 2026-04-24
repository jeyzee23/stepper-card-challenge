import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { formatDateTime } from '@/utils/formatters';

import { styles } from './ActivityTimeline.styles';

import type { ActivityTimelineProps } from './ActivityTimeline.types';

export function ActivityTimeline({ history }: ActivityTimelineProps) {
  const { i18n, t } = useTranslation();
  const entries = [...history].reverse();

  return (
    <View style={styles.container} testID="activity-timeline">
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
