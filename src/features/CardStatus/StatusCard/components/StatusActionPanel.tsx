import React from 'react';
import { Text, View } from 'react-native';

import { ActionButton } from '@/components/ActionButton';

import { statusActionPanelStyles as styles } from './StatusActionPanel.styles';
import { StatusCardStateControls } from '../controls/StatusCardStateControls';

import type { CardStatus, CardStatusChangeSource } from '../StatusCard.types';

interface StatusActionPanelProps {
  actionHint: string;
  actionLabel: string;
  nextStatus: CardStatus;
  onStatusChange: (status: CardStatus, source?: CardStatusChangeSource) => void;
  status: CardStatus;
  title: string;
}

export function StatusActionPanel({
  actionHint,
  actionLabel,
  nextStatus,
  onStatusChange,
  status,
  title,
}: StatusActionPanelProps) {
  return (
    <View style={styles.actionPanel}>
      <Text style={styles.actionPanelTitle}>{title}</Text>
      <ActionButton
        label={actionLabel}
        onPress={() => onStatusChange(nextStatus, 'quick_action')}
        testID="status-primary-action"
      />
      <StatusCardStateControls onStatusChange={onStatusChange} status={status} />
      <Text style={styles.actionHint}>{actionHint}</Text>
    </View>
  );
}
