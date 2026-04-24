import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, Text, View } from 'react-native';

import { colors } from '@/design-system';

import { styles, statusTheme } from './StatusCard.styles';
import {
  cardStatuses,
  type StatusCardStateControlsProps,
} from './StatusCard.types';

export function StatusCardStateControls({
  accentColor: _accentColor,
  onStatusChange,
  status,
}: StatusCardStateControlsProps) {
  const { t } = useTranslation();
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const handleSelectStatus = (nextStatus: (typeof cardStatuses)[number]) => {
    onStatusChange(nextStatus, 'manual');
    setIsSheetVisible(false);
  };

  return (
    <>
      <Pressable
        accessibilityRole="button"
        android_ripple={{ color: colors.brandSoft }}
        onPress={() => setIsSheetVisible(true)}
        style={styles.linkButton}
      >
        <Text style={styles.linkButtonLabel}>
          {t('statusCard.manageStatus')}
        </Text>
      </Pressable>

      <Modal
        animationType="slide"
        onRequestClose={() => setIsSheetVisible(false)}
        transparent
        visible={isSheetVisible}
      >
        <Pressable
          accessibilityRole="button"
          onPress={() => setIsSheetVisible(false)}
          style={styles.androidSheetOverlay}
        >
          <Pressable style={styles.androidSheet}>
            <View style={styles.androidSheetHandle} />
            <Text style={styles.androidSheetTitle}>
              {t('statusCard.manageStatusTitle')}
            </Text>

            {cardStatuses.map(option => {
              const isActive = option === status;
              const theme = statusTheme[option];

              return (
                <Pressable
                  accessibilityLabel={t('statusCard.statusOptionA11yLabel', {
                    status: t(`statusCard.statuses.${option}.label`),
                  })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isActive }}
                  android_ripple={{ color: colors.fill }}
                  key={option}
                  onPress={() => handleSelectStatus(option)}
                  testID={`status-option-${option}`}
                  style={[
                    styles.androidSheetOption,
                    isActive ? styles.androidSheetOptionActive : null,
                  ]}
                >
                  <View
                    style={[
                      styles.androidSheetIcon,
                      { backgroundColor: theme.accent },
                    ]}
                  >
                    <Text style={styles.androidSheetIconLabel}>
                      {theme.icon}
                    </Text>
                  </View>

                  <View style={styles.androidSheetTextBlock}>
                    <Text style={styles.androidSheetOptionTitle}>
                      {t(`statusCard.statuses.${option}.label`)}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={styles.androidSheetOptionDescription}
                    >
                      {t(`statusCard.statuses.${option}.description`)}
                    </Text>
                  </View>

                  <Text style={styles.androidSheetCheck}>
                    {isActive ? '✓' : ''}
                  </Text>
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
