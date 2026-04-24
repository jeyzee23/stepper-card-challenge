import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import { styles } from './StatusCard.styles';
import { cardStatuses, type StatusCardStateControlsProps } from './StatusCard.types';

export function StatusCardStateControls({
  accentColor,
  onStatusChange,
  status,
}: StatusCardStateControlsProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.fallbackSelectorCard}>
      <Text style={styles.sectionLabel}>{t('statusCard.previewTitle')}</Text>
      <View style={styles.selectorRow}>
        {cardStatuses.map(option => {
          const isActive = option === status;

          return (
            <Pressable
              accessibilityLabel={t('statusCard.statusOptionA11yLabel', {
                status: t(`statusCard.statuses.${option}.label`),
              })}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              key={option}
              onPress={() => onStatusChange(option, 'manual')}
              testID={`status-option-${option}`}
              style={[
                styles.selectorPill,
                isActive
                  ? [styles.activeSelectorPill, { borderColor: accentColor }]
                  : null,
              ]}
            >
              <Text
                style={[
                  styles.selectorLabel,
                  isActive
                    ? [styles.activeSelectorLabel, { color: accentColor }]
                    : null,
                ]}
              >
                {t(`statusCard.statuses.${option}.label`)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
