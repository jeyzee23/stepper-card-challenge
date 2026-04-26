import React from 'react';
import { Text, View } from 'react-native';

import { cardDetailsStyles as styles } from './CardDetails.styles';

import type { CardDetailRow } from '../StatusCard.types';

interface CardDetailsProps {
  rows: CardDetailRow[];
}

export function CardDetails({ rows }: CardDetailsProps) {
  return (
    <View style={styles.detailsCard}>
      {rows.map((row, index) => (
        <View
          key={row.label}
          style={[
            styles.detailRow,
            index < rows.length - 1 ? styles.detailRowBorder : null,
          ]}
        >
          <Text style={styles.detailLabel}>{row.label}</Text>
          <Text style={styles.detailValue}>{row.value}</Text>
        </View>
      ))}
    </View>
  );
}
