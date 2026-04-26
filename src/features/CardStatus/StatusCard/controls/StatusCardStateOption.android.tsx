import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/design-system';

import { statusCardStateControlsStyles as styles } from './StatusCardStateControls.styles';
import { cardStatusTheme } from '../../CardStatus.theme';

import type { CardStatus } from '../StatusCard.types';

interface StatusCardStateOptionProps {
  isActive: boolean;
  onPress: () => void;
  option: CardStatus;
}

export function StatusCardStateOption({
  isActive,
  onPress,
  option,
}: StatusCardStateOptionProps) {
  const { t } = useTranslation();
  const theme = cardStatusTheme[option];

  return (
    <Pressable
      accessibilityLabel={t('statusCard.statusOptionA11yLabel', {
        status: t(`statusCard.statuses.${option}.label`),
      })}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      android_ripple={{ color: colors.fill }}
      onPress={onPress}
      testID={`status-option-${option}`}
      style={[
        styles.androidSheetOption,
        isActive ? styles.androidSheetOptionActive : null,
      ]}
    >
      <View
        style={[styles.androidSheetIcon, { backgroundColor: theme.accent }]}
      >
        <Text style={styles.androidSheetIconLabel}>{theme.icon}</Text>
      </View>

      <View style={styles.androidSheetTextBlock}>
        <Text style={styles.androidSheetOptionTitle}>
          {t(`statusCard.statuses.${option}.label`)}
        </Text>
        <Text numberOfLines={2} style={styles.androidSheetOptionDescription}>
          {t(`statusCard.statuses.${option}.description`)}
        </Text>
      </View>

      <Text style={styles.androidSheetCheck}>{isActive ? '✓' : ''}</Text>
    </Pressable>
  );
}
