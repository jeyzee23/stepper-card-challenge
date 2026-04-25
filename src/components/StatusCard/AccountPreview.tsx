import React from 'react';
import { Text, View } from 'react-native';

import { accountPreviewStyles as styles } from './AccountPreview.styles';

import type { AccountCardData, StatusTheme } from './StatusCard.types';

interface AccountPreviewProps {
  account: AccountCardData;
  accountLabel: string;
  description: string;
  theme: StatusTheme;
}

export function AccountPreview({
  account,
  accountLabel,
  description,
  theme,
}: AccountPreviewProps) {
  return (
    <View style={styles.accountPreview}>
      <View style={styles.accountPreviewTopRow}>
        <View
          style={[styles.statusIconTile, { backgroundColor: theme.accent }]}
        >
          <Text style={styles.statusIconTileLabel}>{theme.icon}</Text>
        </View>

        <View style={styles.accountNumberBlock}>
          <Text style={styles.maskedNumber}>{account.maskedNumber}</Text>
          <Text style={styles.accountMeta}>
            {accountLabel} {account.accountId}
          </Text>
        </View>
      </View>

      <Text style={styles.statusDescription}>{description}</Text>
    </View>
  );
}
