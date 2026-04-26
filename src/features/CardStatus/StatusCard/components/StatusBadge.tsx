import React from 'react';
import { Text, View } from 'react-native';

import { statusBadgeStyles as styles } from './StatusBadge.styles';

import type { CardStatus, StatusTheme } from '../StatusCard.types';

interface StatusBadgeProps {
  label: string;
  status: CardStatus;
  theme: StatusTheme;
}

export function StatusBadge({ label, status, theme }: StatusBadgeProps) {
  return (
    <View
      style={[styles.statusBadge, { backgroundColor: theme.badgeBackground }]}
      testID={`status-badge-${status}`}
    >
      <View style={[styles.statusBadgeIcon, { backgroundColor: theme.accent }]}>
        <Text style={styles.statusBadgeIconLabel}>{theme.icon}</Text>
      </View>
      <Text style={[styles.statusLabel, { color: theme.accent }]}>{label}</Text>
    </View>
  );
}
