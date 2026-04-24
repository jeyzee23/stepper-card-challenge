import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { styles } from './QualitySignals.styles';

export function QualitySignals() {
  const { t } = useTranslation();
  const items = t('qualitySignals.items', {
    returnObjects: true,
  }) as readonly string[];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('qualitySignals.title')}</Text>
      <View style={styles.list}>
        {items.map((item, index) => (
          <View
            key={item}
            style={[
              styles.row,
              index < items.length - 1 ? styles.rowBorder : null,
            ]}
          >
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
