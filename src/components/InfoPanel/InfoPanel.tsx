import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './InfoPanel.styles';

import type { InfoPanelProps } from './InfoPanel.types';

export function InfoPanel({
  bullets,
  description,
  highlightLabel,
  highlightValue,
  title,
}: InfoPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>{highlightLabel}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.highlightCard}>
        <Text style={styles.highlightValue}>{highlightValue}</Text>
      </View>

      <View style={styles.bulletList}>
        {bullets.map((item, index) => (
          <View
            key={item}
            style={[
              styles.bulletRow,
              index < bullets.length - 1 ? styles.bulletRowBorder : null,
            ]}
          >
            <Text style={styles.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
