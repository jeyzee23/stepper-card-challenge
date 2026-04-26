import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActionSheetIOS, Pressable, Text } from 'react-native';

import { statusCardStateControlsLinkStyles as styles } from './StatusCardStateControlsLink.styles';
import { cardStatuses } from '../../CardStatus.types';

import type { StatusCardStateControlsProps } from '../StatusCard.types';

export function StatusCardStateControls({
  onStatusChange,
  status: _status,
}: StatusCardStateControlsProps) {
  const { t } = useTranslation();

  const openStatusSheet = () => {
    const options = [
      ...cardStatuses.map(option => t(`statusCard.statuses.${option}.label`)),
      t('common.cancel'),
    ];
    const cancelButtonIndex = options.length - 1;

    ActionSheetIOS.showActionSheetWithOptions(
      {
        cancelButtonIndex,
        options,
        title: t('statusCard.manageStatusTitle'),
      },
      selectedIndex => {
        if (
          selectedIndex === undefined ||
          selectedIndex === cancelButtonIndex
        ) {
          return;
        }

        onStatusChange(cardStatuses[selectedIndex], 'manual');
      },
    );
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={openStatusSheet}
      style={styles.linkButton}
    >
      <Text style={styles.linkButtonLabel}>{t('statusCard.manageStatus')}</Text>
    </Pressable>
  );
}
