import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, Text, View } from 'react-native';

import { colors } from '@/design-system';

import {
  cardStatuses,
  type StatusCardStateControlsProps,
} from './StatusCard.types';
import { statusCardStateControlsStyles as styles } from './StatusCardStateControls.styles';
import { statusCardStateControlsLinkStyles as linkStyles } from './StatusCardStateControlsLink.styles';
import { StatusCardStateOption } from './StatusCardStateOption.android';

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
        style={linkStyles.linkButton}
      >
        <Text style={linkStyles.linkButtonLabel}>
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

              return (
                <StatusCardStateOption
                  isActive={isActive}
                  key={option}
                  onPress={() => handleSelectStatus(option)}
                  option={option}
                />
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
