import React from 'react';
import { Text, View } from 'react-native';

import { ActionButton } from '@/components/ActionButton';

import { statusActionPanelStyles as styles } from './StatusActionPanel.styles';
import { StatusCardStateControls } from './StatusCardStateControls';

import type {
  CardStatus,
  CardStatusChangeSource,
  StatusTheme,
} from './StatusCard.types';

interface StatusActionPanelProps {
  actionHint: string;
  actionLabel: string;
  nextStatus: CardStatus;
  onStatusChange: (status: CardStatus, source?: CardStatusChangeSource) => void;
  status: CardStatus;
  theme: StatusTheme;
  title: string;
}

export function StatusActionPanel({
  actionHint,
  actionLabel,
  nextStatus,
  onStatusChange,
  status,
  theme,
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
      <StatusCardStateControls
        accentColor={theme.accent}
        onStatusChange={onStatusChange}
        status={status}
      />
      <Text style={styles.actionHint}>{actionHint}</Text>
    </View>
  );
}
